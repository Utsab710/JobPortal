from rest_framework import viewsets
from .models import SeekerSignup
from rest_framework import serializers

class SeekerSerializers (serializers.ModelSerializer):
    class Meta:
        model = SeekerSignup
        fields ='__all__'


class SeekerViewsets(viewsets.ModelViewSet):
    queryset = SeekerSignup.objects.all()
    serializer_class = SeekerSerializers

