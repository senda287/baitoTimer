from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('clock', views.clock, name='clock'),
    path('google213d77350f25b686.html', views.google, name='google'),
]