from django.shortcuts import render
from . import urls
# Create your views here.

def index(request):
    return render(request, 'core/index.html')
