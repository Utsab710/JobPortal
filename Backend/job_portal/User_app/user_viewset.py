from rest_framework import viewsets
from .models import CustomUser
from .serializers import UsersSerializers

class UsersViewsets(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class= UsersSerializers