from rest_framework import serializers
from core.models import SavedTrip

class SavedTripSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedTrip
        fields = ['id', 'trip_id', 'user_id']
