from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from .models import *
import vertexai
from vertexai.generative_models import GenerativeModel, ChatSession
import time

# google api jazz
project_id = "unicshackathon2024"
location = "europe-west2"
vertexai.init(project=project_id, location=location)

model = GenerativeModel("gemini-1.0-pro")
chat = model.start_chat()



def index(request):
    return HttpResponse("Hello World")

#>>> from articles_api import views
#>>> views.run() 
def run():
    print('ran')

def convert_Article():
    set(RawArticle.objects.all()[RawArticle.objects.last()])
    RawArticle.objects.last().update(translate_complete = False)



def create_LLM_Article():
    
    for i in range(RawArticle.objects.count()):
        if RawArticle.objects.all()[i].translate_complete== False:
            SimpleArticle.objects.all()[i].delete()
            set(RawArticle.objects.all()[i])
            RawArticle.objects.all()[i].translate_complete = True
            RawArticle.objects.all()[i].save()

        
#0,4
def set(i):
    title = get_primary_title(i.title,i.content)
    time.sleep(4)
    content = get_primary_article(i.title,i.content)
    SimpleArticle.objects.create(simple_type= "primary",original_article=i,source_url=i.source_url ,title=title,pub_date=i.pub_date,author=i.author,content=content, image_url = i.image_url)
    title = get_secondary_title(i.title,i.content)
    time.sleep(4)
    content = get_secondary_article(i.title,i.content)
    SimpleArticle.objects.create(simple_type= "secondary",original_article=i,source_url=i.source_url ,title=title,pub_date=i.pub_date,author=i.author,content=content, image_url = i.image_url)
    title = get_lazy_title(i.title,i.content)
    time.sleep(4)
    content = get_lazy_article(i.title,i.content)
    SimpleArticle.objects.create(simple_type= "lazy",original_article=i,source_url=i.source_url ,title=title,pub_date=i.pub_date,author=i.author,content=content, image_url = i.image_url)


def get_chat_response(chat: ChatSession, prompt: str) -> str:
    response = chat.send_message(prompt)
    return response.text

def get_primary_article(title, article):
    # Input: article text
    # Return: primary article
    prompt = ("Generate a concise, simplified, for primary version of the body of this article: " + title + "\n\n" + article)
    primary_article = get_chat_response(chat, prompt)
    return primary_article

def get_primary_title(title, article):
    # Input: article text
    # Return: primary title
    prompt = ("Create a single short 'for kids' Title for this article: \n"  +article )
    primary_title = get_chat_response(chat, prompt)
    primary_title = primary_title.split("\n")[0]
    return primary_title

def get_secondary_article(title, article):
    # Input: article text
    # Return: secondary article
    prompt = ("Generate a shortened for secondary level version of the body of this article: \n" + title + "\n\n" + article)
    secondary_article = get_chat_response(chat, prompt)
    return secondary_article

def get_secondary_title(title, article):
    # Input: article text
    # Return: secondary title
    prompt = ("Generate a shortened for secondary level version of the Title and only the title of this article:  \n"  +article)
    secondary_title = get_chat_response(chat, prompt)
    secondary_title = secondary_title.split("\n")[0]
    return secondary_title

def get_lazy_article(title,article):
    # Input: article text
    # Return: lazy article
    prompt = ("Generate a summarised version of the body of this article:  \n" + title + "\n\n" + article)
    lazy_article = get_chat_response(chat, prompt)
    return lazy_article

def get_lazy_title(title,article):
    # Input: article text
    # Return: lazy article
    prompt = ("Generate a summarised version of the Title and only the title of this article:  \n" + article)
    lazy_title = get_chat_response(chat, prompt)
    lazy_title = lazy_title.split("\n")[0]
    return lazy_title