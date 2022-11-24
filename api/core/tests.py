from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from core.models import User


class CoreApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_register(self):
        '''
        Tests:
        1. register new user
        2. re-register same user
        '''

        # 1. register new user
        # set payload
        payload = {
            'firstname': 'John',
            'lastname': 'Doe',
            'email': 'johndoe@email.com',
            'password': 'password'
        }

        # check database is empty
        self.assertEqual(User.objects.count(), 0)

        # make request
        response = self.client.post('/api/register', payload)

        # check response
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), payload)

        # check user added to database
        self.assertTrue(User.objects.filter(email=payload['email']).exists())

        # 2. re-register same user
        # make request
        response = self.client.post('/api/register', payload)

        # check resposne
        self.assertEqual(response.status_code, status.HTTP_409_CONFLICT)
