from django.contrib import admin
# pyrefly: ignore [missing-import]
from .models import Enquiry


@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    """
    Admin interface customization for Project Enquiries.
    """
    list_display = [
        "full_name",
        "company",
        "corporate_email",
        "status",
        "created_at",
    ]

    list_filter = [
        "status",
        "created_at",
    ]

    search_fields = [
        "full_name",
        "company",
        "corporate_email",
        "phone",
    ]

    readonly_fields = [
        "created_at",
        "ip_address",
    ]

    ordering = [
        "-created_at",
    ]

    fieldsets = (
        ("Client Details", {
            "fields": (
                "full_name",
                "company",
                "corporate_email",
                "phone",
                "discipline",
            )
        }),
        ("Scope of Work", {
            "fields": (
                "project_scope",
            )
        }),
        ("Processing & Workflow", {
            "fields": (
                "status",
            )
        }),
        ("Submission Metadata", {
            "fields": (
                "created_at",
                "ip_address",
            ),
            "classes": ("collapse",),
        }),
    )

    list_editable = ["status"]
    list_per_page = 25
