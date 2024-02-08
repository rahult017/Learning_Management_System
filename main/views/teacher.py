from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from main.models.teacher import Teacher
from main.serializers.teacher import TeacherSerializer

class TeacherCreateList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class TeacherDetail(generics.RetrieveDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
