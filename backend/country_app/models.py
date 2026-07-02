from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=100)
    flags = models.ImageField(upload_to='countries/')
    description = models.TextField()

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Country"
        verbose_name_plural = "Countries"
