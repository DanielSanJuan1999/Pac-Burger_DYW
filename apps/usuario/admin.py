from django.contrib import admin

from apps.usuario.models import Usuario, Pedido, Hamburguesa, Cupones, Hist_Cupones
# Register your models here.

admin.site.register(Usuario)
admin.site.register(Pedido)
admin.site.register(Hamburguesa)
admin.site.register(Cupones)
admin.site.register(Hist_Cupones)