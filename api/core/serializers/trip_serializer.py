from rest_framework import serializers
from core.models import Trip

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ['id', 'depature_date', 'return_date', 'destination', 'price', 'transport_mode']
