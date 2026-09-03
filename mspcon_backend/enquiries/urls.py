from django.urls import path
# pyrefly: ignore [missing-import]
from .views import EnquiryListCreateView, EnquiryDetailView

app_name = 'enquiries'

urlpatterns = [
    path('', EnquiryListCreateView.as_view(), name='enquiry-list-create'),
    path('<int:pk>/', EnquiryDetailView.as_view(), name='enquiry-detail'),
]
