from core.models import Trip, Office
from core.serializers import TripSerializer
from rest_framework import mixins, generics


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
