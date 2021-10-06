from django.db import models


# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=255)
    user_lastname = models.CharField(max_length=255)
    lgin = models.CharField(max_length=255)
    password = models.CharField(max_length=255)


class Task(models.Model):
    task_name = models.CharField(max_length=255)
    task_date = models.DateField()
    task_status = models.CharField(max_length=255)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

