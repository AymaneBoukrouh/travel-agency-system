from rest_framework import serializers
from core.models import Transport

class TransportSerializer(serializers.ModelSerializer):
    class Meta:
        model=Transport
        fields=['id_transport','price_transport','type']
