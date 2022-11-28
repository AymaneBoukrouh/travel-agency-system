from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from core.models import Office

class OfficeCRUDTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_create_office(self):
        '''
        Tests:
        1. create office
        '''

        # 1. create office
        # set payload
        payload = {
            'city': 'New York',
            'zipcode': '90000'
        }

        # check database is empty
        self.assertEqual(Office.objects.count(), 0)

        # make request
        response = self.client.post('/api/offices', payload)

        # check response
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.json()['city'], payload['city'])

        # check office added to database
        self.assertTrue(Office.objects.filter(city=payload['city']).exists())

