from django.urls import path
from core import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('hello_world', views.hello_world),
    path('register', views.register),
    path('login', TokenObtainPairView.as_view()),
    path('refresh', TokenRefreshView.as_view()),
    path('current_user', views.current_user),
    path('hotels', views.HotelList.as_view()),
    path('hotels/<int:pk>', views.HotelDetail.as_view()),
    path('offices', views.OfficeList.as_view(), name='office-list'),
    path('offices/<int:pk>', views.OfficeDetail.as_view(), name='office-detail'),
    path('reservations', views.ReservationList.as_view()),
    path('reservations/<int:pk>', views.ReservationDetail.as_view()),
    path('trips', views.TripList.as_view()),
    path('trips/<int:pk>', views.TripDetail.as_view()),
    path('saved_trips', views.SavedTripList.as_view()),
    path('saved_trips/<int:pk>', views.SavedTripDetail.as_view()),
    path('trip_clicks', views.TripClickList.as_view(), name='trip-click-list'),
]