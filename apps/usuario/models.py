from django.db import models

# Create your models here.

class Usuario(models.Model):
    rut = models.CharField(max_length=12, primary_key=True)
    nombre = models.CharField(max_length=50)
    email = models.EmailField()
    clave =  models.CharField(max_length=15)
    fecha_nac = models.DateField()
    foto_perfil = models.ImageField()
    puntos_usu = models.IntegerField()

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    def __str__(self):
        return self.nombre

class Hamburguesa(models.Model):
    id_hamburguesa = models.IntegerField(primary_key=True)
    descripcion = models.CharField(max_length=100)
    costo = models.IntegerField()
    puntos_ham = models.IntegerField()

class Cupones(models.Model):
    id_cupon = models.IntegerField(primary_key=True)
    desc = models.CharField(max_length=25)
    descuento = models.DecimalField(max_digits=3, decimal_places=2)
    costo_puntos = models.IntegerField()

class Pedido(models.Model):
    id_pedido = models.IntegerField(primary_key=True)
    costo_total = models.IntegerField()
    puntos_total = models.IntegerField()
    rut = models.ForeignKey(Usuario, null=True, blank=True, on_delete=models.DO_NOTHING)
    id_hamburguesa = models.ForeignKey(Hamburguesa, null=True, blank=True, on_delete=models.DO_NOTHING)
    id_cupon = models.ForeignKey(Cupones, null=True, blank=True, on_delete=models.DO_NOTHING)

class Hist_Cupones(models.Model):
    rut = models.ForeignKey(Usuario, null=True, blank=True, on_delete=models.DO_NOTHING)
    id_cupon = models.ForeignKey(Cupones, null=True, blank=True, on_delete=models.DO_NOTHING)
    total_puntos_his = models.IntegerField()