from django.contrib import admin

# Register your models here.
from .models import RawArticle, SimpleArticle

admin.site.register(RawArticle)
admin.site.register(SimpleArticle)