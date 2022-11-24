from django.http import JsonResponse
from django.utils.translation import gettext as _
from rest_framework.response import Response
from rest_framework.decorators import api_view
from core.models import User

@api_view(['GET'])
def hello_world(request):
    return Response({'message': _('Hello')})

@api_view(['POST'])
def register(request):
    # check if email already exists
    if User.objects.filter(email=request.data['email']).exists():
        return Response({'message': _('An account with this email already exists.')}, status=409)

    # create user
    user = User.objects.create(
        firstname = request.data['firstname'],
        lastname = request.data['lastname'],
        email = request.data['email'],
        password = request.data['password'] # TODO: encrypt password
    )

    # add user to database
    user.save()
    print(user.serialize())

    # return user
    return Response(request.data)
