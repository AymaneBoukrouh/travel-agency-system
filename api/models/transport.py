from django.db import models


class Transport(models.Model):
    id_transport=models.AutoField(primary_key=True)
    price_transport=models.FloatField()
    type=models.CharField(max_length=64)