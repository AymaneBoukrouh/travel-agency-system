from django.db import models


class User(models.Model):
    id_user=models.AutoField(primary_key=True)
    user_firstname=models.CharField(max_length=64)
    user_lastname=models.CharField(max_length=64)
    user_password=models.CharField(max_length=64)