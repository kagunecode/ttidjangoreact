from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes, api_view
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from .serializers import ProjectsSerializer
from .models import Projects

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProjects(request):
    user, _ = JWTAuthentication().authenticate(request)
    email = user.email
    try:
        projects = Projects.objects.filter(user__email=email)
        serializer = ProjectsSerializer(projects, many=True)
        return Response(serializer.data)
    except Projects.DoesNotExist:
        return Response({'message': 'No projects found. Check user.'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProject(request, project_id):
    user, _ = JWTAuthentication().authenticate(request)
    email = user.email
    try:
        project = Projects.objects.get(id=project_id,user__email=email)
        serializer = ProjectsSerializer(project)
        return Response(serializer.data)
    except Projects.DoesNotExist:
        return Response({'message': 'No project found.'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProject(request):
    serializer = ProjectsSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)


# @permission_classes([IsAuthenticated])
# class ProjectsView(viewsets.ModelViewSet):
#     serializer_class = ProjectsSerializer

#     def list(self, request):
#         print(self.request.headers.authorization)
#         return Response('Ok')