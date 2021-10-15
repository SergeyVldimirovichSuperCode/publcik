from .models import *

def get_user():
    return User.objects.all()
def get_task():
    return Task.objects.all()