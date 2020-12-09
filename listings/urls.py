from django.urls import path
from .views import (ListingView,
                    ListingDetailView,
                    SearchFieldView)


app_name="listings"

urlpatterns = [
    path('',ListingView.as_view(),name="listing"),
    path('search/',SearchFieldView.as_view()),
    path('<slug>/',ListingDetailView.as_view())
]