from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from core.models import TripClick, Trip, Office

class TripClickViewTestCase(TestCase):
    def setUp(self):
        # Create user
        User = get_user_model()
        user = User.objects.create(username='test', password='test')

        # Create trip (and office)
        office = Office.objects.create(city='New York', zipcode=10001)
        trip = Trip.objects.create(**{
          'departure_date': '2022-01-01',
          'arrival_date': '2022-01-07',
          'destination': 'New York, NY',
          'price': 1000,
          'transport_mode': 'Plane',
          'office': office
        })

        # Create trip click
        self.trip_click_data = {
          'trip_id': trip.id,
          'user_id': user.id
        }

        self.trip_click = TripClick.objects.create(**self.trip_click_data)

        self.url = reverse('trip-click-list')

    def test_trip_click_list_view(self):
        # Test GET request to TripClickList view
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['user_id'], self.trip_click_data['user_id'])
        self.assertEqual(response.data[0]['trip_id'], self.trip_click_data['trip_id'])

        # Test POST request to TripClickList view
        new_trip_click_data = self.trip_click_data
        response = self.client.post(self.url, data=new_trip_click_data, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(TripClick.objects.count(), 2)

        # Check that duplicate trip clicks are allowed
        response = self.client.post(self.url, data=new_trip_click_data, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(TripClick.objects.count(), 3)
