from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('servicos/', views.servicos, name='servicos'),
    path('unidades/', views.unidades, name='unidades'),
]