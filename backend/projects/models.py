from django.db import models
from user.models import User

# Create your models here.

class Projects(models.Model):
    name = models.CharField(max_length=100)
    colour = models.CharField(max_length=30)
    favourite = models.BooleanField(default=False)
    user = models.ForeignKey(User,default=None,on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    