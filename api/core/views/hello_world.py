from django.utils.translation import gettext as _
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

@api_view(['GET'])
def hello_world(request):
    return Response({'message': _('Hello')})
