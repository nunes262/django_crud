from django.shortcuts import render
from rest_framework import generics
from .models import Artist
from .serializer import ArtistSerializer
# Create your views here.


class ArtistListCreateView(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer


class ArtistDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
