from django.db import models

# Create your models here.

class Projects(models.Model):
    name = models.CharField(max_length=100)
    colour = models.CharField(max_length=30)
    favourite = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    