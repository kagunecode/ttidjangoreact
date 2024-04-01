from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import TasksSerializer
from .models import Tasks

# Create your views here.

class TaskView(APIView):
    serializer_class = TasksSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class TasksView(APIView):
    #permission_classes = [IsAuthenticated]
    serializer_class = TasksSerializer
    
    def get(self, request, project_id):
        user = request.user
        tasks = Tasks.objects.filter(user__email=user, project=project_id)
        serializer = self.serializer_class(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
