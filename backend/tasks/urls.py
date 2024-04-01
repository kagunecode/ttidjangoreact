from django.urls import path, include
from . import views

urlpatterns = [
    path('tasks/', views.TaskView.as_view()),
    path('tasks/<int:project_id>/', views.TasksView.as_view())
]
