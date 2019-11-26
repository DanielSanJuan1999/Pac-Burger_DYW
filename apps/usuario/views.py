from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from apps.usuario.models import Usuario
from django.contrib.auth import login as do_login
from django.contrib.auth import logout as do_logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate
# Create your views here.

def home(request):
    return render(request, 'usuario/index.html')

def cupones(request):
    return render(request, 'usuario/cupones.html')

def editperfil(request):
    return render(request, 'usuario/editperfil.html')

def game(request):
    return render(request, 'usuario/game.html') 

def perfil(request):
    return render(request, 'usuario/perfil.html')

def resultado(request):
    return render(request, 'usuario/resultado.html')

def signin(request):
    return render(request, 'usuario/signin.html')

def register(request):
    if request.POST:
        rut = request.POST.get('rut', False)
        nombre = request.POST.get('nombre', False)
        clave = request.POST.get('clave', False)
        email = request.POST.get('email' , False)
        fecha_nac = request.POST.get('fecha_nac', False)
        foto_perfil = ('apps/usuario/static/usuario/img/prof-pic/ryu-prof.png')
        puntos_usu = 0

        v = Usuario( rut=rut, nombre=nombre, clave=clave, email=email, fecha_nac=fecha_nac, foto_perfil=foto_perfil, puntos_usu=puntos_usu)
        u = User.objects.create_user(
            username=nombre, password=clave
            )
        v.save()
        u.save()
        return render(request,'usuario/resultado.html')

    return render(request,'usuario/signin.html')

def logout(request):
    do_logout(request)
    return redirect('/')

def login(request):
    form = AuthenticationForm()
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            user = authenticate(username=username, password=password)

            if user is not None:
                do_login(request, user)
                return('/main.html')
    
    return render(request, "usuario/login.html", {'form': form})