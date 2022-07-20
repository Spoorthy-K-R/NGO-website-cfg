from rest_framework.serializers import ModelSerializer
from .models.Student import Student
from .models.Company import Company
from .models.Investor import Investor
from .models.Entrepreneur import Entrepeneur



class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"
        lookup_field = 'id'


class CompanySerializer(ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"
        lookup_field = 'id'
        
class InvestorSerializer(ModelSerializer):
    class Meta:
        model = Investor
        fields = "__all__"
        lookup_field = 'id'
        
class EntrepeneurSerializer(ModelSerializer):
    class Meta:
        model = Entrepeneur
        fields = "__all__"
        lookup_field = 'id'
        