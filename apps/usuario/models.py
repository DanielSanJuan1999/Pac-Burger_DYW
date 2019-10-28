from django.db import models

# Create your models here.

class Usuario(models.Model):
    rut = models.CharField(max_length=12, primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    email = models.EmailField()
    clave =  models.CharField(max_length=25)
    fecha_nac = models.DateField()
    puntos_usu = models.IntegerField()

class Vegetales(models.Model):
    id_veg = models.IntegerField(primary_key=True)
    desc = models.CharField(max_length=20)
    stock = models.BooleanField()
    costo = models.IntegerField()
    puntos = models.IntegerField()

class Pan(models.Model):
    id_pan = models.IntegerField(primary_key=True)
    desc = models.CharField(max_length=20)
    stock = models.BooleanField()
    costo = models.IntegerField()
    puntos = models.IntegerField()

class Carne(models.Model):
    id_carne = models.IntegerField(primary_key=True)
    desc = models.CharField(max_length=20)
    stock = models.BooleanField()
    costo = models.IntegerField()
    puntos = models.IntegerField()

class Adherezo(models.Model):
    id_ad = models.IntegerField(primary_key=True)
    desc = models.CharField(max_length=20)
    stock = models.BooleanField()
    costo = models.IntegerField()
    puntos = models.IntegerField()

class Hamburguesa(models.Model):
    id_hamburguesa = models.IntegerField(primary_key=True)
    descripcion = models.CharField(max_length=100)
    id_pan = models.ForeignKey(Pan, null=True, blank=True, on_delete=models.DO_NOTHING)
    id_carne = models.ForeignKey(Carne, null=True, blank=True, on_delete=models.DO_NOTHING)
    id_veg = models.ForeignKey(Vegetales, null=True, blank=True, on_delete=models.DO_NOTHING)
    id_ad = models.ForeignKey(Adherezo, null=True, blank=True, on_delete=models.DO_NOTHING)

class Pedido(models.Model):
    id_pedido = models.IntegerField(primary_key=True)
    desc_pedido = models.CharField(max_length=100)
    costo_total = models.IntegerField()
    puntos_total = models.IntegerField()
    rut = models.ForeignKey(Usuario, null=True, blank=True, on_delete=models.DO_NOTHING)
    id_hamburguesa = models.ForeignKey(Hamburguesa, null=True, blank=True, on_delete=models.DO_NOTHING)

class Cupones(models.Model):
    id_cupon = models.IntegerField(primary_key=True)
    desc = models.CharField(max_length=25)
    descuento = models.DecimalField(max_digits=3, decimal_places=2)
    costo_puntos = models.IntegerField()

class Hist_Cupones(models.Model):
    rut = models.ForeignKey(Usuario, null=True, blank=True, on_delete=models.DO_NOTHING)
    id_cupon = models.ForeignKey(Cupones, null=True, blank=True, on_delete=models.DO_NOTHING)
    total_puntos_his = models.IntegerField()