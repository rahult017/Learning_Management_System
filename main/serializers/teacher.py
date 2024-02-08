from rest_framework import serializers
from main.models.teacher import Teacher


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id', 'first_name', 'last_name', 'email', 'qualification', 'mobile', 'address']