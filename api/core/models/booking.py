from django.db import models


class Booking(models.Model):
    id = models.AutoField(primary_key=True)

    trip = models.ForeignKey('Trip', on_delete=models.CASCADE)
    #hotel = models.ForeignKey('Hotel', on_delete=models.CASCADE)
    number_of_people = models.IntegerField() # TODO: add number of adults and children separately

    @property
    def total_price(self):
        trip_price = self.trip.price * self.number_of_people
        hotel_price = self.hotel.price * self.number_of_people * self.trip.number_of_nights
        return trip_price + hotel_price
