from django.shortcuts import render
from django.http import HttpResponse
import json
from rest_framework.decorators import api_view


@api_view(['POST'])
def register(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    print(f'body: {body}')

    print(body['username'])
    print(body['password'])

    return HttpResponse('hello')
