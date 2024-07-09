from django.urls import path
from .views import ArtistListCreateView, ArtistDetailView

urlpatterns = [
    path('artists/', ArtistListCreateView.as_view(), name='artists-list-create'),
    path('artists/<int:pk>/', ArtistDetailView.as_view(), name='artist-detail'),
]
