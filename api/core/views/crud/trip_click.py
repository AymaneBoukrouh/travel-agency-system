from core.models import TripClick, Trip
from core.serializers import TripClickSerializer
from django.contrib.auth.models import User
from rest_framework import mixins, generics


class TripClickList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = TripClick.objects.all()
    serializer_class = TripClickSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)
  
    def perform_create(self, serializer):
        trip = Trip.objects.get(id=self.request.data['trip_id'])
        user = User.objects.get(id=self.request.data['user_id'])
        serializer.save(trip=trip, user=user)
