from django.urls import path
from .views import AnimalListCreatetView, AnimalDetailView
urlpatterns = [
    path('animals/',AnimalListCreatetView.as_view(), name='animal-list'),
    path('animals/<int:pk>/',AnimalDetailView.as_view(), name='animal-detail')
]
