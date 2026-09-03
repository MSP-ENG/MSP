import logging
from django.shortcuts import get_object_or_404
from django.utils.decorators import method_decorator
from django_ratelimit.decorators import ratelimit
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
# pyrefly: ignore [missing-import]
from .models import Enquiry 
# pyrefly: ignore [missing-import]
from .serializers import (
    EnquiryPublicCreateSerializer,
    EnquiryDetailSerializer,
    EnquiryStatusUpdateSerializer,
)
# pyrefly: ignore [missing-import]
from .emails import send_enquiry_notification_email

logger = logging.getLogger(__name__)


def get_client_ip(request):
    """
    Safely extracts client IP address from the request.
    Prefers REMOTE_ADDR unless HTTP_X_FORWARDED_FOR header is provided.
    """
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0].strip()
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


class EnquiryListCreateView(APIView):
    """
    API endpoint for:
    - POST /api/enquiries/ -> Public submission with rate limiting (5 req/min per IP)
    - GET  /api/enquiries/ -> Staff-only listing of all enquiries
    """

    def get_permissions(self):
        if self.request.method == 'POST':
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    @method_decorator(ratelimit(key='ip', rate='5/m', method='POST', block=False))
    def post(self, request, *args, **kwargs):
        # Check django-ratelimit flag on DRF Request and underlying HttpRequest
        was_limited = getattr(request, 'limited', False) or getattr(
            getattr(request, '_request', None), 'limited', False
        )
        if was_limited:
            return Response(
                {"detail": "Rate limit exceeded. Maximum 5 submissions per minute per IP address."},
                status=status.HTTP_429_TOO_MANY_REQUESTS
            )

        serializer = EnquiryPublicCreateSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Capture client IP
        client_ip = get_client_ip(request)
        enquiry = serializer.save(ip_address=client_ip)

        # Trigger notification email (safe - will not block or fail if email encounters an issue)
        send_enquiry_notification_email(enquiry)

        # Return serialized enquiry with 201 Created
        response_serializer = EnquiryDetailSerializer(enquiry)
        return Response(response_serializer.data, status=status.HTTP_201_CREATED)

    def get(self, request, *args, **kwargs):
        enquiries = Enquiry.objects.all()
        serializer = EnquiryDetailSerializer(enquiries, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class EnquiryDetailView(APIView):
    """
    API endpoint for:
    - GET   /api/enquiries/<pk>/ -> Staff-only retrieval of a single enquiry
    - PATCH /api/enquiries/<pk>/ -> Staff-only update of the enquiry status
    """
    permission_classes = [permissions.IsAdminUser]

    def get(self, request, pk, *args, **kwargs):
        enquiry = get_object_or_404(Enquiry, pk=pk)
        serializer = EnquiryDetailSerializer(enquiry)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, pk, *args, **kwargs):
        enquiry = get_object_or_404(Enquiry, pk=pk)
        serializer = EnquiryStatusUpdateSerializer(enquiry, data=request.data, partial=True)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        # Return full updated object representation
        response_serializer = EnquiryDetailSerializer(enquiry)
        return Response(response_serializer.data, status=status.HTTP_200_OK)
