from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import status
from .serializers import ProjectsSerializer
from .models import Projects

class ProjectsView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectsSerializer

    def get(self, request):
        user = request.user
        projects = Projects.objects.filter(user__email=user)
        serializer = self.serializer_class(projects, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class ProjectView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectsSerializer

    def get_project(self, project_id, user):
        project = Projects.objects.get(id=project_id, user__email=user)
        return project

    def get(self, request, project_id):
        user = request.user
        try:
            project = self.get_project(project_id, user)
            serializer = self.serializer_class(project)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Projects.DoesNotExist:
            return Response({'message': "Project doesn't exist or you dont have the permissions to get it"}, status=status.HTTP_401_UNAUTHORIZED)
    
    def put(self, request, project_id):
        user = request.user
        project = self.get_project(project_id, user)
        serializer = self.serializer_class(project, data=request.data)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def delete(self, request, project_id):
        user = request.user
        project = self.get_project(project_id, user)
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
