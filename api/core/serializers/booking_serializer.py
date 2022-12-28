from rest_framework import serializers
from core.models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'user_id', 'trip_id', 'number_of_people']
