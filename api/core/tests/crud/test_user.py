from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from django.contrib.auth.models import User

class UserViewTestCase(TestCase):
    def setUp(self):
        self.user_data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'testpass',
            'first_name': 'Test',
            'last_name': 'User'
        }
        self.user = User.objects.create(**self.user_data)
        self.url = reverse('user-list')

    def test_user_list_view(self):
        # Test GET request to UserList view
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['first_name'], self.user_data['first_name'])
        self.assertEqual(response.data[0]['last_name'], self.user_data['last_name'])

    def test_user_detail_view(self):
        # Test GET request to UserDetail view
        response = self.client.get(self.url + f'/{self.user.pk}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['first_name'], self.user_data['first_name'])
        self.assertEqual(response.data['last_name'], self.user_data['last_name'])

        # Test PUT request to UserDetail view
        new_data = {
            'username': 'updateduser',
            'email': 'updated@example.com',
            'first_name': 'Updated',
            'last_name': 'User'
        }
        response = self.client.put(self.url + f'/{self.user.pk}', data=new_data, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['first_name'], new_data['first_name'])
        self.assertEqual(response.data['last_name'], new_data['last_name'])
      
        # Test DELETE request to UserDetail view
        response = self.client.delete(self.url + f'/{self.user.pk}')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(User.objects.count(), 0)

    def test_user_detail_view_invalid_pk(self):
        # Test GET request to UserDetail view with invalid pk
        invalid_pk_url = self.url + '/999'
        response = self.client.get(invalid_pk_url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
