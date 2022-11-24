from django import db
from django.http import JsonResponse
from django.utils.translation import gettext as _
from rest_framework.response import Response
from rest_framework.decorators import api_view
from core.models import User
import bcrypt

@api_view(['GET'])
def hello_world(request):
    return Response({'message': _('Hello')})

@api_view(['POST'])
def register(request):
    # hash password
    hashed_password = bcrypt.hashpw(request.data['password'].encode('utf-8'), bcrypt.gensalt())

    # create user if email is unique
    try:
        user = User.objects.create(
            firstname = request.data['firstname'],
            lastname = request.data['lastname'],
            email = request.data['email'],
            password = hashed_password.decode('utf-8')
        )
    
    except db.utils.IntegrityError:
        return Response({'message': _('An account with this email already exists.')}, status=409)

    # add user to database
    user.save()

    # return user
    return Response(request.data)
