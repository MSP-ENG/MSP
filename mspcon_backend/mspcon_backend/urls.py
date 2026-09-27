from django.contrib import admin
from django.http import JsonResponse
from django.urls import path, include


def home(request):
    return JsonResponse({
        "status": "success",
        "message": "MSP Backend API is running",
    })


urlpatterns = [
    path('', home, name='home'),
    path('admin/', admin.site.urls),
    path('api/enquiries/', include('enquiries.urls')),
]