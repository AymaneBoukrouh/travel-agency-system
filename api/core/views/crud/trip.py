from core.models import Trip, Office
from core.serializers import TripSerializer
from rest_framework import mixins, generics, permissions
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from django.utils import timezone

@api_view(['GET'])
def get_morocco_trips(request):
    trips = Trip.objects.filter(departure_date__gt=timezone.now(), morocco=True)
    serializer = TripSerializer(trips, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def get_abroad_trips(request):
    trips = Trip.objects.filter(departure_date__gt=timezone.now(), morocco=False)
    serializer = TripSerializer(trips, many=True)

    return Response(serializer.data)


class TripList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

    def perform_create(self, serializer):
        office = Office.objects.get(id=self.request.data['office_id'])
        serializer.save(office=office)


class TripDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)
