from django.db import models


class CourseCategories(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self) -> str:
        return self.title