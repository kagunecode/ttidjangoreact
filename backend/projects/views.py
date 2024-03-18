from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes, api_view
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import ProjectsSerializer
from .models import Projects

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProjects(request):
    user, _ = JWTAuthentication().authenticate(request)
    email = user.email
    projects = Projects.objects.filter(user__email=email)
    serializer = ProjectsSerializer(projects, many=True)
    return Response(serializer.data)
    



# @permission_classes([IsAuthenticated])
# class ProjectsView(viewsets.ModelViewSet):
#     serializer_class = ProjectsSerializer

#     def list(self, request):
#         print(self.request.headers.authorization)
#         return Response('Ok')