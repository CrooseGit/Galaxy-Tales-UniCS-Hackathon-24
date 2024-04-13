import json
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from articles_api.models import *
from articles_api.serializer import SimpleArticleSerializer

# Create your views here.
@api_view(['POST'])
def getRecentArticles(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    simple_type = body['simple_type']

    if 'quantity' in body:
        quantity = body['quantity']        
    else:
        quantity = 5
    
    articles = SimpleArticle.objects.filter(simple_type=simple_type).order_by('-id')
    if articles.count() < quantity:
        quantity = articles.count()

    articles = articles[:quantity]
    
    serialized = SimpleArticleSerializer(serialized, many=True)

    return JsonResponse(serialized.data, safe=False)

@api_view(['POST'])
def getNextArticles(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    simple_type = body['simple_type']
    current_article_id = body['current_article']

    if 'quantity' in body:
        quantity = body['quantity']        
    else:
        quantity = 5
    
    next_article = SimpleArticle.objects.filter(simple_type=simple_type,id_gte=current_article_id).order_by('-id')
    if next_article.count() < quantity:
        quantity = next_article.count()

    next_article = next_article[:quantity]
    
    serialized = SimpleArticleSerializer(serialized, many=True)

    return JsonResponse(serialized.data, safe=False)