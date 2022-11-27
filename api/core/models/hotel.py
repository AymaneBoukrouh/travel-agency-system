from django.db import models

class Hotel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)
    location = models.CharField(max_length=64)
    price = models.FloatField()
