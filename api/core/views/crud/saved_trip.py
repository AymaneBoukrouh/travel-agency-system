from core.models import SavedTrip, Trip
from core.serializers import SavedTripSerializer
from django.contrib.auth.models import User
from rest_framework import mixins, generics


class SavedTripListAndDelete(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = SavedTrip.objects.all()
    serializer_class = SavedTripSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def delete(self, request, pk):
        return self.destroy(request, pk)

    def perform_create(self, serializer):
        trip = Trip.objects.get(id=self.request.data['trip_id'])
        user = User.objects.get(id=self.request.data['user_id'])
        serializer.save(trip=trip, user=user)
