from rest_framework import serializers
from ./models/travel import Travel

class TravelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Travel
        fields=['id_travel','date_depart','date_arrival','price_travel','destination']