from django.contrib import admin
from .models import Projects

@admin.register(Projects)
class ProjectsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'colour', 'favourite')
    list_filter = ('favourite',)
