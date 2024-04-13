from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("Hello World")

#>>> from articles_api import views
#>>> views.run() 
def run():
    print('ran')