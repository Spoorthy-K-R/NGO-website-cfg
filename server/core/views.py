from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, DestroyAPIView
from .models.Student import Student
from .models.Company import Company
from .models.Investor import Investor
from .models.Entrepreneur import Entrepeneur
from .serializers import StudentSerializer, CompanySerializer, InvestorSerializer, EntrepeneurSerializer
import sqlite3
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status



# Create your views here.

class StudentCreateView(ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentListView(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentDetailView(RetrieveAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field = 'id'
    
class StudentDeleteView(DestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field = 'id'


class CompanyCreateView(ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyListView(ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetailView(RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'
    
class CompanyDeleteView(DestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'
    
class InvestorCreateView(ListCreateAPIView):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer


class InvestorListView(ListAPIView):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer


class InvestorDetailView(RetrieveAPIView):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer
    lookup_field = 'id'
    
class InvestorDeleteView(DestroyAPIView):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer
    lookup_field = 'id'
    
class EntrepeneurCreateView(ListCreateAPIView):
    queryset = Entrepeneur.objects.all()
    serializer_class = EntrepeneurSerializer


class EntrepeneurListView(ListAPIView):
    queryset = Entrepeneur.objects.all()
    serializer_class = EntrepeneurSerializer


class EntrepeneurDetailView(RetrieveAPIView):
    queryset = Entrepeneur.objects.all()
    serializer_class = EntrepeneurSerializer
    lookup_field = 'id'


class EntrepeneurDeleteView(DestroyAPIView):
    queryset = Entrepeneur.objects.all()
    serializer_class = EntrepeneurSerializer
    lookup_field = 'id'

@api_view(("GET",))
def sendCountOfUsers(request):
    con = sqlite3.connect('db.sqlite3')
    cursor = con.cursor()
    cursor.execute("SELECT * FROM allCounts")
    x = cursor.fetchall()
    y = dict()
    for a in x:
        key, value = a[0], a[1]
        y[key] = value

    return Response(y, status=status.HTTP_201_CREATED)


@api_view(("GET",))
def sendFilteredEntrepreneursByMonth(request):
    con = sqlite3.connect('db.sqlite3')
    cursor = con.cursor()
    cursor.execute("SELECT * FROM EnterpreunerByMonth")
    x = cursor.fetchall()
    y = dict()
    for a in x:
        key, value = a[0], a[1]
        y[key] = value

    return Response(y, status=status.HTTP_201_CREATED)


@api_view(("GET",))
def sendFilteredStudentsByDay(request):
    con = sqlite3.connect('db.sqlite3')
    cursor = con.cursor()
    cursor.execute("SELECT * FROM StudentsByDay")
    x = cursor.fetchall()
    y = dict()
    for a in x:
        key, value = a[0], a[1]
        y[key] = value

    return Response(y, status=status.HTTP_201_CREATED)


@api_view(("GET",))
def sendFilteredStudentsAddedByMonth(request):
    con = sqlite3.connect('db.sqlite3')
    cursor = con.cursor()
    cursor.execute("SELECT * FROM StudentsAddedByMonth")
    x = cursor.fetchall()
    y = dict()
    for a in x:
        key, value = a[0], a[1]
        y[key] = value

    return Response(y, status=status.HTTP_201_CREATED)


@api_view(("GET",))
def sendFilteredEnterpreunerGenderBreakup(request):
    con = sqlite3.connect('db.sqlite3')
    cursor = con.cursor()
    cursor.execute("SELECT * FROM EnterpreunerGenderBreakup")
    x = cursor.fetchall()
    y = dict()
    for a in x:
        key, value = a[0], a[1]
        y[key] = value

    return Response(y, status=status.HTTP_201_CREATED)



    

