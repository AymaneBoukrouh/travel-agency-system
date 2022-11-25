from rest_framework import serializers
from ./models/reservation import reservation

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Reservation
        fileds=['id_reservation','date_reservation']