from django.db import models

# Create your models here.
class Entrepeneur(models.Model):
    firstName = models.CharField(max_length=255, blank=True, null=True)
    lastName = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=200, blank=True, null=True)
    mobile = models.BigIntegerField(max_length=10, blank=True, null=True)
    startup_idea = models.CharField(max_length=550, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    challenges = models.CharField(max_length=550, blank=True, null=True)
    requirements = models.CharField(max_length=550, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        app_label = "core"

    def __str__(self):
        return self.firstName + self.lastName

    
