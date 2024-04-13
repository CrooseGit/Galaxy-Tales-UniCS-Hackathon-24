from rest_framework import serializers
from .models import *
class SimpleArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleArticle
        fields = ['id','original_article','source_url','title','pub_date','author','content','image_url']