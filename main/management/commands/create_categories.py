# myapp/management/commands/create_sample_data.py

from django.core.management.base import BaseCommand
from faker import Faker
from main.models.category import CourseCategories

class Command(BaseCommand):
    help = 'Creates sample data for CourseCategories model'

    def handle(self, *args, **options):
        fake = Faker()

        for _ in range(10):  # Generate 10 sample records
            title = fake.word()  # Generate a random word for the title
            description = fake.text()  # Generate a random text for the description

            category = CourseCategories.objects.create(
                title=title,
                description=description
            )

            category.save()

        self.stdout.write(self.style.SUCCESS('Sample data created successfully'))
