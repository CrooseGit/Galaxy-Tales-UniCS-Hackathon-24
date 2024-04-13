import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from rest_framework.permissions import AllowAny

# Create your views here.


def index(request):
    return HttpResponse("Hello World")


# >>> from articles_api import views
# >>> views.run()
def run():
    print("ran")


def addRawArticle(request):
    permission_classes = (AllowAny,)
    body_unicode = request.body.decode("utf-8")
    body = json.loads(body_unicode)

    title = body["title"]
    pub_date = body["pub_date"]
    source_url = body["source_url"]
    author = body["author"]
    content = body["content"]
    image_url = body["image_url"]
    translate_complete = False

    RawArticle.objects.create(
        title=title,
        pub_date=pub_date,
        source_url=source_url,
        author=author,
        content=content,
        image_url=image_url,
        translate_complete=translate_complete,
    )

    return JsonResponse({"status": "success"})
