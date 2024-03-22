from django.test import TestCase
from ..models import Projects
from user.models import User

class ProjectTest(TestCase):
    def setUp(self):
        user = User.objects.create(name='test', email='test@gmail.com', password='test')
        Projects.objects.create(name='Testing', colour='#FFFFFF', favourite=False, user=user)

    def test_project_creation_with_correct_user(self):
        project = Projects.objects.get(name='Testing')
        self.assertEqual(project.name, 'Testing', "Project name does not match expected value.")
        self.assertEqual(project.colour, '#FFFFFF', "Project colour does not match expected value.")
        self.assertFalse(project.favourite, "Project favourite flag should be False.")
        self.assertEqual(project.user_id, 1, "Project user ID does not match expected value.")
