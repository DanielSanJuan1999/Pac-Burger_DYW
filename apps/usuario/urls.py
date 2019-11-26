from django.contrib import admin
from django.urls import path
from .views import home, cupones, editperfil, game, login, perfil, resultado, register

urlpatterns = [
    path('', home, name="home"),
    path('cupones/', cupones, name="cupones"),
    path('editperfil/', editperfil, name="editperfil"),
    path('game/', game, name="game"),
    path('login/', login, name="login"),
    path('perfil/', perfil, name="perfil"),
    path('resultado/', resultado, name="resultado"),
    path('signin/', register, name="signin")
]