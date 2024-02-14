# myapp/management/commands/create_teachers.py

from django.core.management.base import BaseCommand
from faker import Faker
from main.models.teacher import Teacher

class Command(BaseCommand):
    help = 'Creates sample data for Teacher model'

    def handle(self, *args, **options):
        fake = Faker()

        for _ in range(10):  # Generate 10 sample teachers
            teacher = Teacher.objects.create(
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                email=fake.email(),
                password=fake.password(),
                qualification=fake.job(),
                mobile=fake.phone_number(),
                address=fake.address()
            )
            teacher.save()

        self.stdout.write(self.style.SUCCESS('Sample data created successfully'))
