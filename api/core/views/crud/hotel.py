from core.models import Hotel
from core.serializers import HotelSerializer
from rest_framework import mixins, generics


class HotelList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class HotelDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)
