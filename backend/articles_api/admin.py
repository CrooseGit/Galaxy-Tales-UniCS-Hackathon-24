from django.contrib import admin

# Register your models here.
from .models import RawArticle, SimpleArticle




class SimpleArticleAdmin(admin.ModelAdmin):
    list_display=['title','simple_type','id','original_article_title']
    def original_article_title(self, instance):
        return instance.original_article.title

admin.site.register(SimpleArticle,SimpleArticleAdmin)



admin.site.register(RawArticle)