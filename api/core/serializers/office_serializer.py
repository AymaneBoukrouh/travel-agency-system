from rest_framework import serializers
from core.models import Office

class OfficeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Local
        fields = ['id', 'city', 'zipcode']
