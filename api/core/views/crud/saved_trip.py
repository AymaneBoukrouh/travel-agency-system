from core.models import SavedTrip, Trip
from core.serializers import SavedTripSerializer
from django.contrib.auth.models import User
from rest_framework import mixins, generics


class SavedTripList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = SavedTrip.objects.all()
    serializer_class = SavedTripSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)
  
    def perform_create(self, serializer):
        trip = Trip.objects.get(id=self.request.data['trip_id'])
        user = User.objects.get(id=self.request.data['user_id'])

        # check if the user has already saved the trip
        if not SavedTrip.objects.filter(trip=trip, user=user).exists():
            serializer.save(trip=trip, user=user)


class SavedTripDetail(mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = SavedTrip.objects.all()
    serializer_class = SavedTripSerializer

    def delete(self, request, pk):
        return self.destroy(request, pk)

