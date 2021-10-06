
from django.shortcuts import render

from django.views import View
from django.http import HttpResponse
# Create your views here.
class MainPage(View):
    def get(self, request):
        context = {}
        return render(request, 'index.html', context=context)