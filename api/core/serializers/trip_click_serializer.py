from rest_framework import serializers
from core.models import TripClick

class TripClickSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripClick
        fields = ['id', 'trip_id', 'user_id']
