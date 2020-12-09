from django.db import models
from django.utils.timezone import now
from realtors.models import Realtor
# Create your models here.

class Listing(models.Model):
    class SaleType(models.TextChoices):
        FOR_SALE="For Sale"
        FOR_RENT = "For Rent"
    class HouseType(models.TextChoices):
        HOUSE="House"
        CONDO = "Condo"
        APPARTMENT = "Appartment"

    realtor = models.ForeignKey(Realtor,on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=75,unique=True)
    title = models.CharField(max_length=200)
    address = models.CharField(max_length=500)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    zipcode = models.CharField(max_length=15)
    description = models.TextField()
    saletype = models.CharField(max_length=40,choices=SaleType.choices,default=SaleType.FOR_SALE)
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=2,decimal_places=1)
    home_type=models.CharField(choices=HouseType.choices,max_length=50,default=HouseType.HOUSE)
    sqft = models.IntegerField()
    open_house = models.BooleanField(default=False)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d')
    photo_1 = models.ImageField(upload_to ='photos/%Y/%M/%D',blank = True)
    photo_2 = models.ImageField(upload_to ='photos/%Y/%M/%D',blank = True)
    photo_3 = models.ImageField(upload_to ='photos/%Y/%M/%D',blank = True)
    photo_4 = models.ImageField(upload_to ='photos/%Y/%M/%D',blank = True)
    photo_5 = models.ImageField(upload_to ='photos/%Y/%M/%D',blank = True)
    photo_6 = models.ImageField(upload_to ='photos/%Y/%M/%D',blank = True)
    photo_7 = models.ImageField(upload_to ='photos/%Y/%M/%D',blank = True)
    photo_8 = models.ImageField(upload_to ='photos/%Y/%M/%D',blank = True)
    photo_9 = models.ImageField(upload_to ='photos/%Y/%M/%D',blank = True)
    photo_10 = models.ImageField(upload_to ='photos/%Y/%M/%D',blank = True)
    is_published= models.BooleanField(default=True)
    listing_date = models.DateTimeField(default = now,blank=True)

    def __str__(self):
        return self.title
    