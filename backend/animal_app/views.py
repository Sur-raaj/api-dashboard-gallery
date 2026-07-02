from rest_framework import generics
from .serializers import AnimalSerializer
from .models import Animal
# Create your views here.

class AnimalListCreatetView(generics.ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

class AnimalDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer