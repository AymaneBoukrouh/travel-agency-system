from core.models import Office
from core.serializers import OfficeSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# TODO: switch to mixins and generics

class OfficeList(APIView):
    def get(self, request):
        offices = Office.objects.all()
        serializer = OfficeSerializer(offices, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = OfficeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OfficeDetail(APIView):
    def get_object(self, pk):
        try:
            return Office.objects.get(pk=pk)
        except Office.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        office = self.get_object(pk)
        serializer = OfficeSerializer(office)
        return Response(serializer.data)

    def put(self, request, pk):
        office = self.get_object(pk)
        serializer = OfficeSerializer(office, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        office = self.get_object(pk)
        office.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
