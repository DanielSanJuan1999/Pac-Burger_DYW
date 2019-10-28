from django.contrib import admin

from apps.usuario.models import Usuario, Pedido, Hamburguesa, Vegetales, Pan, Carne, Adherezo, Cupones, Hist_Cupones
# Register your models here.

admin.site.register(Usuario)
admin.site.register(Pedido)
admin.site.register(Hamburguesa)
admin.site.register(Vegetales)
admin.site.register(Pan)
admin.site.register(Carne)
admin.site.register(Adherezo)
admin.site.register(Cupones)
admin.site.register(Hist_Cupones)