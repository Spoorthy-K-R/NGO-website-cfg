from django.db import models

# Create your models here.
class Company(models.Model):
    """
        Company description would include: 
        manufacturing locations, 
        branches, 
        board of directors,
        company vision statement,
        health standards complied,
        jobs offered.
    """
    companyName = models.CharField(max_length=255, blank=True, null=True)
    registeredAddress = models.CharField(max_length=1000, blank=True, null=True)
    corporateAddress = models.CharField(max_length=1000, blank=True, null=True)
    companyDescription = models.TextField(blank=True, null=True)
    companyProfile = models.CharField(max_length=255, blank=True, null=True)
    numberOfEmployees = models.IntegerField(blank=True, null=True)
    quarterlyTurnover = models.CharField(max_length=255, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    class Meta:
        app_label = "core"

    def __str__(self):
        return self.companyName
