from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from main.models.course import Course
from main.serializers.course import CourseSerializer

class CourseCreateList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseDetail(generics.RetrieveDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
