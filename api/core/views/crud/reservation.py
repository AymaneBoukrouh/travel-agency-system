from core.models import Reservation
from core.serializers import ReservationSerializer
from rest_framework import mixins, generics


class ReservationList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class ReservationDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)
