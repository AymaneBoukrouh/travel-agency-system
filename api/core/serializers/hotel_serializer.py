from rest_framework import serializers
from core.models import Hotel


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hotel
        fields=['id_hotel','name_hotel','hotel_location','hotel_price']