from django.shortcuts import render
from .models import User
import json
from django.http import JsonResponse


# Create your views here.
def showProfile(req,pk):
    print("qweq",pk)
    user = User.objects.all()[pk]
    context = {'name': user.name, 'surname': user.surname, 'tel': user.tel, 'email': user.email, 'status': user.status}
    return render(req, 'user.html', context)

def login(req):
    obj = json.loads(req.body.decode('utf-8'))
    print(obj)
    print('Name:',obj['name'])
    print('Password:',obj['pass'])
    return JsonResponse({"x": "doctor"})