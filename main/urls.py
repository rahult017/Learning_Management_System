from django.urls import path
from main.views.teacher import TeacherCreateList,TeacherDetail

urlpatterns = [
    path('teacher/', TeacherCreateList.as_view(),name="list-teacher"),
    path('teacher/<int:pk>', TeacherDetail.as_view(),name="detail-teacher"),
]
