from rest_framework import viewsets
from .models import EmployerSignup
from rest_framework import serializers

class EmployerSerializers (serializers.ModelSerializer):
    class Meta:
        model = EmployerSignup
        fields ='__all__'


class EmployerViewsets(viewsets.ModelViewSet):
    queryset = EmployerSignup.objects.all()
    serializer_class = EmployerSerializers

