from django.db import models

class Local(models.Model):
    id_local=models.AutoField(primary_key=True)
    local_city=models.CharField(max_length=64)
    zip_code=models.IntegerField()