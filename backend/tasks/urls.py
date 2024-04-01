from django.urls import path, include
from . import views

urlpatterns = [
    path('tasks/', views.TasksView.as_view())
]
