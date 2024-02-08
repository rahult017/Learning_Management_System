from django.contrib import admin

# Register your models here.
from .models.teacher import Teacher
from .models.course import Course
from .models.category import CourseCategories
from .models.student import Student

admin.site.register(Teacher)
admin.site.register(Course)
admin.site.register(CourseCategories)
admin.site.register(Student)