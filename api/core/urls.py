from django.urls import path
from core import views

urlpatterns = [
    path('hello_world/', views.hello_world)
]