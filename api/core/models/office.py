from django.db import models

class Office(models.Model):
    id = models.AutoField(primary_key=True)
    city = models.CharField(max_length=64, unique=True)
    zipcode = models.IntegerField()

    # TODO: add trips
