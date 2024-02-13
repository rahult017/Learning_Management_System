from django.urls import path
from main.views.teacher import TeacherCreateList,TeacherDetail
from .views.course import CourseCreateList,CourseDetail

urlpatterns = [
    path('teacher/', TeacherCreateList.as_view(),name="create-list-teacher"),
    path('teacher/<int:pk>/', TeacherDetail.as_view(),name="detail-teacher"),
    path('course/', CourseCreateList.as_view(),name="create-list-course"),
    path('course/<int:pk>/', CourseDetail.as_view(),name="detail-course"),
]
