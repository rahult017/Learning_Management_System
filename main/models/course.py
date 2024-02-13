from django.db import models
from .category import CourseCategories
from .teacher import Teacher



class Course(models.Model):
    CHOICES = (
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced')
    )
    title = models.CharField(max_length=100)
    description = models.TextField()
    level = models.CharField(max_length=30,choices=CHOICES,default="Beginner")
    course_fee = models.IntegerField(default=0)
    categories = models.ForeignKey(CourseCategories,on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title