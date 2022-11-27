from django.db import models


class Reservation(models.Model):
    id_reservation=models.AutoField(primary_key=True)
    date_reservation=models.DateField()
    