from unittest import TestCase
import requests


class TestHotelService(TestCase):
    def setUp(self):
        self.url = 'http://hotel_microservice/api/hotels'

    def test_get_hotels(self):
        response = requests.get(self.url)
        self.assertEqual(response.status_code, 200)
