from django.utils.translation import gettext as _
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from core.models import Trip, Office, Booking, TripClick
from django.utils import timezone

@api_view(['GET'])
def dashboard(request):
    '''Return dashboard data'''

    bookings = Booking.objects.all()
    morocco_revenues = 0
    abroad_revenues = 0

    for booking in bookings:
        if booking.trip.morocco:
            morocco_revenues += booking.total_price
        else:
            abroad_revenues += booking.total_price

    # add commas to revenues
    revenues = morocco_revenues + abroad_revenues

    revenues = '{:,}'.format(int(revenues))
    morocco_revenues = '{:,}'.format(int(morocco_revenues))
    abroad_revenues = '{:,}'.format(int(abroad_revenues))

    return Response({
        'trips': Trip.objects.count(),
        'users': User.objects.count(),
        'offices': Office.objects.count(),
        'completed_trips': Trip.objects.filter(arrival_date__lt=timezone.now()).count(),
        'bookings': Booking.objects.count(),
        'morocco_revenues': morocco_revenues,
        'abroad_revenues': abroad_revenues,
        'revenues': revenues,
        'trip_clicks': TripClick.objects.count()
    })
