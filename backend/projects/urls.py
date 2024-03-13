from django.urls import path, include
from rest_framework import routers
from projects import views

router = routers.DefaultRouter()
router.register(r'projects', views.ProjectsView, 'projects')

urlpatterns = [
    path('', include(router.urls)),
]
