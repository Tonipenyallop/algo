from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from rest_framework.decorators import api_view


@api_view(['POST'])
def register(request):
    print(request)

    return HttpResponse('hello')
