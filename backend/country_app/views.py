from rest_framework import generics
from .serializers import CountrySerializer
from .models import Country
# Create your views here.

class CountryListCreatetView(generics.ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class CountryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer