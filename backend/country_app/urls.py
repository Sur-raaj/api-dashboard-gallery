from django.urls import path
from .views import CountryListCreatetView, CountryDetailView
urlpatterns = [
    path('countries/',CountryListCreatetView.as_view(), name='country-list'),
    path('countries/<int:pk>/',CountryDetailView.as_view(), name='country-detail')
]
