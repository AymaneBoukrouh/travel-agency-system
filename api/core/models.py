from django.db import models


class User(models.Model):
    id = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    email = models.EmailField(max_length=64, unique=True)
    password = models.CharField(max_length=60) # 60 is the max length of a bcrypt hash
    created_at = models.DateTimeField(auto_now_add=True)

    def serialize(self):
        return {
            'id': self.id,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'email': self.email,
            'created_at': self.created_at.strftime('%b %d %Y, %I:%M %p')
        }
