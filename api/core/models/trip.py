from django.db import models

class Trip(models.Model):
    id = models.AutoField(primary_key=True)
    departure_date = models.DateField()
    arrival_date = models.DateField()
    destination = models.CharField(max_length=64) # TODO: support multiple destinations
    price = models.FloatField()
    transport_mode = models.CharField(max_length=64) # TODO: support multiple transport modes (in succession)

    office = models.ForeignKey('Office', on_delete=models.CASCADE)

    # TODO: add number of nights
    # TODO: add different price for adults and children
