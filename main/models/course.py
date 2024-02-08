from django.db import models
from .category import CourseCategories
from .teacher import Teacher


class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    categories = models.ForeignKey(CourseCategories,on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title