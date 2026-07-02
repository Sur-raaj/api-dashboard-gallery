from rest_framework import generics
from .serializers import VehicleSerializer
from .models import Vehicle
# Create your views here.

class VehicleListCreatetView(generics.ListCreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class VehicleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer