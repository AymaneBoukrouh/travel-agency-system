from rest_framework import serializers
from ./models/trasnport import Transport

class TransportSerializer(serializers.ModelSerializer):
    class Meta:
        model=Transport
        fields=['id_transport','price_transport','type']
