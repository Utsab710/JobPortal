from rest_framework import viewsets
from .models import CustomUser
from .serializers import UsersSerializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, TokenAuthentication


class UsersViewsets(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class= UsersSerializers
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication, SessionAuthentication]