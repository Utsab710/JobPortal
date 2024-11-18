from django.db import models

class EmployerSignup(models.Model):
    username = models.CharField(max_length=200, null=True)
    password = models.CharField(max_length=128,null=True)
    email = models.EmailField(unique=True)
    years_of_experience = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return self.username
