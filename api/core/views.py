from django import db
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.utils.translation import gettext as _
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
def hello_world(request):
    return Response({'message': _('Hello')})

@api_view(['POST'])
def register(request):
    try:
        # create user
        user = User.objects.create_user(
            username = request.data['email'], # set username to email
            email = request.data['email'],
            password = request.data['password'],
            first_name = request.data['firstname'],
            last_name = request.data['lastname']
        )

        # save user
        user.save()
        
    except db.IntegrityError:
        return Response({'message': _('An account with this email already exists.')}, status=409)

    # return user
    return Response({
        'id': user.id,
        'firstname': user.first_name,
        'lastname': user.last_name,
        'email': user.email
    })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def current_user(request):
    user = request.user
    return Response({
        'id': user.id,
        'firstname': user.first_name,
        'lastname': user.last_name,
        'email': user.email
    })
