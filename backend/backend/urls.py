from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('tasks.urls')),
    path('', include('projects.urls')),
    path('docs/', include_docs_urls(title='Task Manager API')),
    path('api/', include('user.urls'))
]
