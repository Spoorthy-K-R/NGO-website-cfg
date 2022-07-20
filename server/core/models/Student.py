from django.db import models

# Create your models here.
class Student(models.Model):
    firstName = models.CharField(max_length=255, blank=True, null=True)
    lastName = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=200, blank=True, null=True)
    mobile = models.BigIntegerField(max_length=10, blank=True, null=True)
    experience = models.CharField(max_length=255, blank=True, null=True)
    interest = models.CharField(max_length=255, blank=True, null=True)
    linkedIn = models.CharField(max_length=2000, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = "core"

    def __str__(self):
        return self.firstName + self.lastName
