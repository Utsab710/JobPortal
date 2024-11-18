
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .viewset import EmployerViewsets



router = DefaultRouter()
router.register('employer',EmployerViewsets,basename='EmployerViewSets')




urlpatterns = [
    path ("employer/",include(router.urls)),
   
]
