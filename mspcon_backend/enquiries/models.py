from django.db import models


class Enquiry(models.Model):
    """
    Enquiry model representing project enquiries submitted by prospective
    pharmaceutical/biotech engineering clients for MSP Engineering Consultant.
    """
    STATUS_CHOICES = [
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('closed', 'Closed'),
    ]

    full_name = models.CharField(
        max_length=255,
        verbose_name="Full Name",
        help_text="Primary contact's full name"
    )
    company = models.CharField(
        max_length=255,
        blank=True,
        default="",
        verbose_name="Company / Organization",
        help_text="Client organization name"
    )
    corporate_email = models.EmailField(
        verbose_name="Corporate Email",
        help_text="Official business email address"
    )
    phone = models.CharField(
        max_length=50,
        blank=True,
        default="",
        verbose_name="Phone Number",
        help_text="Contact telephone number with country code"
    )
    discipline = models.CharField(
        max_length=150,
        blank=True,
        default="",
        verbose_name="Engineering Discipline",
        help_text="e.g. HVAC & Cleanroom Engineering, Process Engineering, etc."
    )
    project_scope = models.TextField(
        verbose_name="Project Scope",
        help_text="Facility requirements, cleanroom classification, timeline, regulatory targets, etc."
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='new',
        verbose_name="Status",
        help_text="Workflow status (new, contacted, closed)"
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Created At",
        help_text="Timestamp when enquiry was recorded"
    )
    ip_address = models.GenericIPAddressField(
        null=True,
        blank=True,
        verbose_name="Client IP Address",
        help_text="IP address of the client submitting the form"
    )

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Project Enquiry"
        verbose_name_plural = "Project Enquiries"

    def __str__(self):
        company_info = f" ({self.company})" if self.company else ""
        return f"{self.full_name}{company_info} - {self.get_status_display()} ({self.created_at.strftime('%Y-%m-%d') if self.created_at else 'New'})"
