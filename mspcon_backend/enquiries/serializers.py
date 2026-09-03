from rest_framework import serializers
# pyrefly: ignore [missing-import]
from .models import Enquiry


class EnquiryPublicCreateSerializer(serializers.ModelSerializer):
    """
    Serializer for public enquiry submissions.

    Validates required fields, trims extraneous whitespace, normalizes email,
    and includes an anti-spam honeypot ('website') field.
    """
    website = serializers.CharField(
        required=False,
        allow_blank=True,
        write_only=True,
        default="",
        help_text="Anti-spam honeypot field. Must be left blank by genuine users."
    )

    class Meta:
        model = Enquiry
        fields = [
            'id',
            'full_name',
            'company',
            'corporate_email',
            'phone',
            'discipline',
            'project_scope',
            'status',
            'created_at',
            'ip_address',
            'website',
        ]
        read_only_fields = ['id', 'status', 'created_at', 'ip_address']
        extra_kwargs = {
            'full_name': {'required': True, 'allow_blank': False},
            'corporate_email': {'required': True, 'allow_blank': False},
            'project_scope': {'required': True, 'allow_blank': False},
            'company': {'required': False, 'allow_blank': True},
            'phone': {'required': False, 'allow_blank': True},
            'discipline': {'required': False, 'allow_blank': True},
        }

    def validate_full_name(self, value):
        if not value:
            raise serializers.ValidationError("Full name is required.")
        trimmed = value.strip()
        if not trimmed:
            raise serializers.ValidationError("Full name cannot be blank.")
        return trimmed

    def validate_company(self, value):
        return value.strip() if value else ""

    def validate_corporate_email(self, value):
        if not value:
            raise serializers.ValidationError("Corporate email is required.")
        trimmed = value.strip().lower()
        if not trimmed:
            raise serializers.ValidationError("Corporate email cannot be blank.")
        return trimmed

    def validate_phone(self, value):
        return value.strip() if value else ""

    def validate_discipline(self, value):
        return value.strip() if value else ""

    def validate_project_scope(self, value):
        if not value:
            raise serializers.ValidationError("Project scope is required.")
        trimmed = value.strip()
        if not trimmed:
            raise serializers.ValidationError("Project scope cannot be blank.")
        return trimmed

    def validate(self, attrs):
        # Honeypot spam defense check
        website_val = attrs.get('website', '')
        if website_val and str(website_val).strip():
            # Detected bot population in honeypot field
            raise serializers.ValidationError(
                {"detail": "Invalid submission."}
            )
        return attrs

    def create(self, validated_data):
        # Discard the honeypot field before persisting to database
        validated_data.pop('website', None)
        return super().create(validated_data)


class EnquiryDetailSerializer(serializers.ModelSerializer):
    """
    Serializer for staff users to view complete details of an enquiry.
    """
    class Meta:
        model = Enquiry
        fields = [
            'id',
            'full_name',
            'company',
            'corporate_email',
            'phone',
            'discipline',
            'project_scope',
            'status',
            'created_at',
            'ip_address',
        ]
        read_only_fields = [
            'id',
            'full_name',
            'company',
            'corporate_email',
            'phone',
            'discipline',
            'project_scope',
            'status',
            'created_at',
            'ip_address',
        ]


class EnquiryStatusUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer strictly for updating the 'status' of an enquiry by staff.
    Guarantees no other fields can be altered via the PATCH endpoint.
    """
    class Meta:
        model = Enquiry
        fields = ['status']
        extra_kwargs = {
            'status': {'required': True}
        }

    def validate_status(self, value):
        valid_statuses = [choice[0] for choice in Enquiry.STATUS_CHOICES]
        if value not in valid_statuses:
            raise serializers.ValidationError(
                f"Invalid status '{value}'. Allowed values are: {', '.join(valid_statuses)}."
            )
        return value
