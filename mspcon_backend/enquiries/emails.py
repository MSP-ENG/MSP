import logging
from django.conf import settings
from django.core.mail import send_mail

logger = logging.getLogger(__name__)


def send_enquiry_notification_email(enquiry):
    """
    Sends an email notification to the designated recipient upon new enquiry creation.

    This function wraps all email sending in a try-except block so that any
    SMTP or network failure is logged as an error without raising an exception
    or failing the enquiry submission.
    """
    try:
        recipient = getattr(settings, 'ENQUIRY_NOTIFICATION_EMAIL', 'marketing@mspcon.in')
        from_email = getattr(settings, 'DEFAULT_FROM_EMAIL', 'MSP Engineering Consultant <no-reply@mspcon.in>')

        subject = f"New Project Enquiry - {enquiry.full_name}"

        # Format submission time nicely
        if enquiry.created_at:
            submission_time_str = enquiry.created_at.strftime('%Y-%m-%d %H:%M:%S UTC')
        else:
            submission_time_str = "Just now"

        message = f"""New Project Enquiry Received

==================================================
CLIENT DETAILS
==================================================
Full Name:         {enquiry.full_name}
Company:           {enquiry.company or 'Not specified'}
Corporate Email:   {enquiry.corporate_email}
Phone:             {enquiry.phone or 'Not specified'}
Discipline:        {enquiry.discipline or 'Not specified'}

==================================================
PROJECT SCOPE & REQUIREMENTS
==================================================
{enquiry.project_scope}

==================================================
SUBMISSION METADATA
==================================================
Enquiry ID:        #{enquiry.id}
Submission Time:   {submission_time_str}
Client IP Address: {enquiry.ip_address or 'Unknown'}
Status:            {enquiry.get_status_display()}
==================================================

You can review and manage this enquiry in the MSP Admin Dashboard.
"""

        send_mail(
            subject=subject,
            message=message,
            from_email=from_email,
            recipient_list=[recipient],
            fail_silently=False,
        )
        logger.info(
            f"Successfully dispatched enquiry notification email for enquiry #{enquiry.id} to {recipient}"
        )
        return True
    except Exception as e:
        logger.error(
            f"Failed to dispatch enquiry notification email for enquiry #{getattr(enquiry, 'id', 'N/A')}: {str(e)}",
            exc_info=True
        )
        return False
