from django.db import models


class Artist(models.Model):
    TYPE_CHOICES = [
        ('Banda', 'Banda'),
        ('Solo', 'Solo'),
    ]
    DOC_CHOICES = [
        ('CPF', 'CPF'),
        ('RG', 'RG'),
    ]

    name = models.CharField(max_length=100)
    type = models.CharField(max_length=5, choices=TYPE_CHOICES)
    email = models.EmailField()
    document = models.CharField(max_length=20)
    document_type = models.CharField(max_length=3, choices=DOC_CHOICES)

    def __str__(self):
        return self.name
