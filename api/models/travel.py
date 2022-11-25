from django.db import models


class Travel(models.Model):
    id_travel=models.AutoField(primary_key=True)
    date_depart=models.DateField()
    date_arrival=models.DateField()
    price_travel=models.FloatField()
    destination=models.TextField(max_length=200)
