from core.models import Booking, Trip
from core.serializers import BookingSerializer
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework import mixins, generics


class BookingList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        if request.data['number_of_people'] <= 0:
            return JsonResponse({'error': 'Number of people must be greater than 0'}, status=400)

        return self.create(request)

    def perform_create(self, serializer):
        trip = Trip.objects.get(id=self.request.data['trip_id'])
        user = User.objects.get(id=self.request.data['user_id'])
        serializer.save(trip=trip, user=user)
  
class BookingDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)
