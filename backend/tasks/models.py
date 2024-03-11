from django.db import models
from projects.models import Projects
# Create your models here.

class Tasks(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    status = models.BooleanField(default=False)
    project = models.ForeignKey(Projects,default=None,on_delete=models.CASCADE)