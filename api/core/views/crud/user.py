from django.contrib.auth.models import User
from core.serializers import UserSerializer
from rest_framework import mixins, generics


class UserList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request):
        return self.list(request)


class UserDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)

    def perform_update(self, serializer):
        print(serializer.validated_data)
        serializer.save()

    def delete(self, request, pk):
        return self.destroy(request, pk)
