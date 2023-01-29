from rest_framework import serializers
from core.models import Trip

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ['id', 'departure_date', 'arrival_date', 'destination', 'price', 'transport_mode', 'office_id', 'nights', 'morocco']
