from django.db import models


class Hotel(models.Model):
    id_hotel=models.AutoField()
    name_hotel=models.CharField(max_length=64)
    hotel_location=models.CharField(max_length=64)
    hotel_price=models.FloatField()