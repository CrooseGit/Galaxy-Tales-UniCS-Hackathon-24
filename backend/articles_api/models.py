from django.db import models

# Create your models here.

class RawArticle(models.Model):
    title = models.TextField()
    pub_date = models.DateTimeField()
    source_url = models.URLField()
    author= models.TextField()
    content = models.TextField()
    image_url = models.URLField()
    translate_complete = models.BooleanField(default=False);

class SimpleArticle(models.Model):
    target_age = models.IntegerField()
    original_article = models.ForeignKey(RawArticle, on_delete=models.CASCADE)
    source_url = models.URLField()    
    title = models.TextField()
    pub_date = models.DateTimeField()    
    author= models.TextField()
    content = models.TextField()
    image_url = models.URLField()
    