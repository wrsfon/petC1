from django.db import models

# Create your models here.
class User(models.Model):
    # username = models.CharField(max_length=30)
    # password = models.CharField(max_length=30)
    # status = models.CharField(max_length=10)
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    tel = models.CharField(max_length=10)
    email = models.CharField(max_length=50)
    status = 'user'

    def __str__(self):
        return 'Name: '+self.name+'  '+self.surname+'  Tel: '+self.tel+'  Email: '+self.email

class Pet(models.Model):
    petName = models.CharField(max_length=30)
    type = models.CharField(max_length=3)
    birthDate = models.DateField()
    age = models.CharField(max_length=10)
    breed = models.CharField(max_length=30)
    sickness = models.CharField(max_length=30)

    def __str__(self):
        return self.petName+' '+self.birthDate