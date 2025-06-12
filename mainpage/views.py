from django.shortcuts import render

def index(request):
        return render(request, 'mainpage/index.html')

def servicos(request):
    return render(request, 'mainpage/servicos.html')

def unidades(request):
    return render(request, 'mainpage/unidades.html')
