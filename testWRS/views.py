from django.shortcuts import render

def index(req):
    return render(req,'index.html')
def user(req):
    return render(req,'user.html')
def doctor(req):
    return render(req,'doctor.html')
def staff(req):
    return render(req,'staff.html')