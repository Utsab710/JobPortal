
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .viewset import SeekerViewsets



router = DefaultRouter()
router.register('seeker',SeekerViewsets,basename='SeekerViewSets')




urlpatterns = [
    path ("seeker/",include(router.urls)),
   
]
