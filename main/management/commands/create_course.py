from main.models import Course, CourseCategories, Teacher
from django.core.management.base import BaseCommand
from faker import Faker

fake = Faker()

class Command(BaseCommand):
    help = 'Creates sample data for Course model'

    def handle(self, *args, **options):
        teacher = Teacher.objects.all().first()
        category = CourseCategories.objects.all().first()
        
        if teacher and category:
            for _ in range(10):
                course = Course.objects.create(
                    title=fake.sentence(nb_words=3),
                    description=fake.paragraph(),
                    level=fake.random_element(elements=('beginner', 'intermediate', 'advanced')),
                    course_fee=fake.random_int(min=50, max=500),
                    categories=category,
                    teacher=teacher
                )
                course.save()
            self.stdout.write(self.style.SUCCESS('Sample data created successfully'))

        else:
            self.stdout.write(self.style.ERROR('Sample data not created successfully'))