from rest_framework import permissions
from .models import Contacts
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail

# Create your views here.

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self,request,format=None):
        data = self.request.data
        try:
            send_mail(
                data['subject'],
                'Name: '
                + data['name']
                + '\nEmail: '
                + data['email']
                + '\n\nMessage:\n'
                + data['message'],
                'testpersonid@gmail.com',
                ['testpersonid@gmail.com'],
                fail_silently=False
            )
            contact = Contacts(name=data['name'],email=data['email'],subject=data['subject'],message=data['message'])
            contact.save()
            return Response({'success':'Message Sent Successfully'})

        except:
            return Response({'error':'Message Failed To Sent'})
