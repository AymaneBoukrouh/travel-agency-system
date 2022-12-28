from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from core.models import Booking, Trip, Office

class BookingViewTestCase(TestCase):
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

        self.user_id = user.id
        self.trip_id = trip.id

        # Create booking
        self.booking_data = {
          'user_id': user.id,
          'trip_id': trip.id,
          'number_of_people': 5
        }

        self.booking = Booking.objects.create(**self.booking_data)

        self.url = reverse('booking-list')

    def test_booking_list_view(self):
        # Test GET request to BookingList view
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['user_id'], self.booking_data['user_id'])
        self.assertEqual(response.data[0]['trip_id'], self.booking_data['trip_id'])
        self.assertEqual(response.data[0]['number_of_people'], self.booking_data['number_of_people'])

        # Test POST request to BookingList view
        new_booking_data =  self.booking_data
        new_booking_data['number_of_people'] = 10

        response = self.client.post(self.url, data=new_booking_data, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Booking.objects.count(), 2)
        self.assertEqual(response.data['user_id'], new_booking_data['user_id'])
        self.assertEqual(response.data['trip_id'], new_booking_data['trip_id'])
        self.assertEqual(response.data['number_of_people'], new_booking_data['number_of_people'])

    def test_booking_detail_view(self):
        # Test GET request to BookingDetail view
        response = self.client.get(self.url + f'/{self.booking.pk}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['user_id'], self.booking_data['user_id'])
        self.assertEqual(response.data['trip_id'], self.booking_data['trip_id'])
        self.assertEqual(response.data['number_of_people'], self.booking_data['number_of_people'])

        # Test DELETE request to BookingDetail view
        response = self.client.delete(self.url + f'/{self.booking.pk}')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Booking.objects.count(), 0)

    def test_booking_detail_view_invalid_pk(self):
        # Test GET request to BookingDetail view with invalid pk
        invalid_pk_url = self.url + '/999'
        response = self.client.get(invalid_pk_url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_booking_list_view_negative_number_of_people(self):
        # Test POST request to BookingList view with negative number of people
        invalid_data = {
          'user_id': self.user_id,
          'trip_id': self.trip_id,
          'number_of_people': -1
        }

        response = self.client.post(self.url, data=invalid_data, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
