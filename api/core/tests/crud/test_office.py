from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from core.models import Office

class OfficeViewTestCase(TestCase):
    def setUp(self):
        self.office_data = {'city': 'New York', 'zipcode': 10001}
        self.office = Office.objects.create(**self.office_data)
        self.url = reverse('office-list')

    def test_office_list_view(self):
        # Test GET request to OfficeList view
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['city'], self.office_data['city'])
        self.assertEqual(response.data[0]['zipcode'], self.office_data['zipcode'])

        # Test POST request to OfficeList view
        new_office_data = {'city': 'Los Angeles', 'zipcode': 90001}
        response = self.client.post(self.url, data=new_office_data, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['city'], new_office_data['city'])
        self.assertEqual(response.data['zipcode'], new_office_data['zipcode'])

    def test_office_detail_view(self):
        # Test GET request to OfficeDetail view
        response = self.client.get(self.url + f'/{self.office.pk}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['city'], self.office_data['city'])
        self.assertEqual(response.data['zipcode'], self.office_data['zipcode'])

        # Test PUT request to OfficeDetail view
        new_data = {'city': 'Chicago', 'zipcode': 60601}
        response = self.client.put(self.url + f'/{self.office.pk}', data=new_data, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['city'], new_data['city'])
        self.assertEqual(response.data['zipcode'], new_data['zipcode'])

        # Test DELETE request to OfficeDetail view
        response = self.client.delete(self.url + f'/{self.office.pk}')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Office.objects.count(), 0)

    def test_office_detail_view_invalid_pk(self):
        # Test GET request to OfficeDetail view with invalid pk
        invalid_pk_url = self.url + '/999'
        response = self.client.get(invalid_pk_url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_office_list_view_invalid_data(self):
        # Test POST request to OfficeList view with invalid data
        invalid_data = {'city': '', 'zipcode': 90001}
        response = self.client.post(self.url, data=invalid_data, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
