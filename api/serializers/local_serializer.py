from rest_framework import serializers
from api/models/local.py import Local

class LocalSerializer(serializers.ModelSerializer):
    class Meta:
        model= Local
        fields =['id_local','local_city','zip_code']
