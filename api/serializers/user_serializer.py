from rest_framework import serializers
from ./models/user import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id_user','user_firstname','user_lastname','user_password']