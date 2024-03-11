from rest_framework import viewsets
from .serializers import ProjectsSerializer
from .models import Projects

# Create your views here.

class ProjectsView(viewsets.ModelViewSet):
    serializer_class = ProjectsSerializer
    fields = Projects.objects.all()
