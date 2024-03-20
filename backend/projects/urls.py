from django.urls import path, include
from rest_framework import routers
from projects import views

# router = routers.DefaultRouter()
# router.register(r'projects', views.ProjectsView, 'projects')

urlpatterns = [
    # path('', include(router.urls)),
    path('projects/', views.getProjects),
    path('projects/<int:project_id>/', views.getProject),
    path('projects/create', views.createProject)
]
