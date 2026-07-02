from django.urls import path
from .views import VehicleListCreatetView, VehicleDetailView
urlpatterns = [
    path('vehicles/',VehicleListCreatetView.as_view(), name='vehicle-list'),
    path('vehicles/<int:pk>/',VehicleDetailView.as_view(), name='vehicle-detail')
]
