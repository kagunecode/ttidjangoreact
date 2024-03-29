# ttidjangoreact

Todo app with backend Django.

## Django Backend

Project: task_manager
Apps: projects and tasks

- Project model in the projects app with fields like title, description, created_at.
- Task model in the tasks app with fields like title, description, created_at, project (foreign key to the Project model).
- APIs (using Django REST Framework).
- Use serializers to convert model instances to JSON for both Project and Task.
- Create API views and URL patterns for CRUD operations on both Project and Task.
- Define URL patterns for views.

## React Frontend

Vite as main creation tool

- Create components for listing projects and tasks, adding/editing projects and tasks, and displaying individual project/task details.
- Use React state to manage the data fetched from Django API (Zustand might be a good fit here).
- Use fetch or a library like axios to communicate with Django API. Implement functions to retrieve, add, edit, and delete projects and tasks.
- Use React Router to handle navigation between different views (e.g., project list, project details, task list, task details).
- Create forms for adding and editing projects and tasks (check react form hook).
- Apply basic styling to make your app visually appealing (Tailwind CSS).

## Additional Challenges (Optional):

- Integrate token-based authentication with Django REST Framework (djangorestframework-simplejwt).
- Implement pagination for the list views in Django.
- Add search and filtering options for projects and tasks in Django.
- Handle errors gracefully on the frontend and backend.
- Write unit tests for React components and Django API endpoints.
