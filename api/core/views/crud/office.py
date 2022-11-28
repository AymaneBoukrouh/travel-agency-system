from core.models import Office
from core.serializers import OfficeSerializer
from rest_framework import mixins, generics


class OfficeList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class OfficeDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)
