from rest_framework import serializers
from core.models import Reservation

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Reservation
        fileds=['id_reservation','date_reservation']