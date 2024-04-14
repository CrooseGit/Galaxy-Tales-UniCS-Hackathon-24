import json
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from articles_api.models import *
from articles_api.serializer import SimpleArticleSerializer

# Create your views here.
@api_view(['POST'])
def getRecentArticle(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    simple_type = body['simple_type']
    
    article = list(SimpleArticle.objects.filter(simple_type=simple_type).order_by('id'))[0]

    
    serialized = SimpleArticleSerializer(article)

    return JsonResponse(serialized.data, safe=False)

@api_view(['POST'])
def getNextArticles(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    print(body)
    current_article_id = body['id']
    print('here')
    current_article = SimpleArticle.objects.get(id=current_article_id)
    print('there')
    simple_type = current_article.simple_type

    if 'quantity' in body:
        quantity = body['quantity']        
    else:
        quantity = 5
    
    next_article = SimpleArticle.objects.filter(simple_type=simple_type,id__gt=current_article_id).order_by('id')
    if next_article.count() < quantity:
        quantity = next_article.count()

    if next_article.count() == 0:
        next_article = []
    else:
        next_article = next_article[:quantity]
        serialized = SimpleArticleSerializer(next_article, many=True)
    

    return JsonResponse(serialized.data, safe=False)

@api_view(['POST'])
def getArticle(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    article_id = body['id']
    print(article_id)
    article = SimpleArticle.objects.get(id=article_id)    
    
    serialized = SimpleArticleSerializer(article, many=False)

    return JsonResponse(serialized.data, safe=False)



@api_view(['POST'])
def getAlternativeArticle(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    article_id = body['id']
    simple_type = body['simple_type']
    article = SimpleArticle.objects.get(id=article_id)

    alt_article = SimpleArticle.objects.filter(original_article=article.original_article, simple_type=simple_type)

    print(alt_article)
    alt_article = alt_article[0]
    
    serialized = SimpleArticleSerializer(alt_article, many=False)

    return JsonResponse(serialized.data, safe=False)