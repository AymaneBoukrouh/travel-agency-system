# Generated by Django 4.1.3 on 2023-01-21 02:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_booking_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='trip',
            name='morocco',
            field=models.BooleanField(default=True),
        ),
    ]
