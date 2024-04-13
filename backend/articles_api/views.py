from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from .models import *

def index(request):
    return HttpResponse("Hello World")

#>>> from articles_api import views
#>>> views.run() 
def run():
    print('ran')

def test():
    article = RawArticle.objects.all()[0]
    return article.title

def set():
    article = SimpleArticle.objects.create(title="")