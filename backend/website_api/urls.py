from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('getRecentArticle/', view=views.getRecentArticle, name='getRecentArticle'),
    path('getNextArticles/',view=views.getNextArticles,name='getNextArticles'),
     path('getArticle/',view=views.getArticle,name='getArticle'),
     path('getAlternativeArticle/',view=views.getAlternativeArticle,name='getAlternativeArticle')
]
