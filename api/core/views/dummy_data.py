from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db import connection
from django.contrib.auth.models import User
from core.models import Office, Trip, Booking, TripClick
from faker import Faker
from datetime import timedelta


USERS = 8
TRIPS_COMPLETED = 147
TRIPS_UPCOMING = 6


@api_view(['GET'])
def generate_dummy_data(request):
    # drop all tables and reset auto-increment
    User.objects.all().delete()
    Office.objects.all().delete()
    Trip.objects.all().delete()
    Booking.objects.all().delete()
    #TripClick.objects.all().delete()

    # generate data
    print('Generating data...')
    print('1. Users...')
    generate_users()
    print('2. Offices...')
    generate_offices()
    print('3. Trips')
    generate_trips()
    #print('4. Trip clicks')
    #generate_trip_clicks()
    print('5. Bookings')
    generate_bookings()

    return Response({'message': 'Data generated successfully!'})


def generate_users():
    faker = Faker()

    with connection.cursor() as cursor:
        cursor.execute("ALTER TABLE auth_user AUTO_INCREMENT = 1;")

    User.objects.create_user(
      username='aymane',
      first_name='Aymane',
      last_name='Boukrouh',
      email='aymane@gmail.com',
      password='pass1234',
      is_superuser=True
    )

    for _ in range(USERS):
        User.objects.create_user(
            username=faker.user_name(),
            first_name=faker.first_name(),
            last_name=faker.last_name(),
            email=faker.email(),
            password=faker.password()
        )


def generate_offices():
    with connection.cursor() as cursor:
        cursor.execute("ALTER TABLE core_office AUTO_INCREMENT = 1;")

    data = [
      {
        'city': 'Tangier',
        'zipcode': '90000'
      },
      {
        'city': 'Casablanca',
        'zipcode': '20000'
      },
      {
        'city': 'Rabat',
        'zipcode': '32000'
      }
    ]

    for office in data:
        Office.objects.create(**office)


def generate_trips():
    faker = Faker()

    with connection.cursor() as cursor:
        cursor.execute("ALTER TABLE core_trip AUTO_INCREMENT = 1;")

    for _ in range(TRIPS_COMPLETED):
        morocco = bool(not faker.random_int(min=0, max=3))

        departure_date = faker.date_time_between(start_date='-5y', end_date='-1m', tzinfo=None)

        Trip.objects.create(
            departure_date=departure_date,
            arrival_date=departure_date + timedelta(days=faker.random_int(min=1, max=10)),
            destination='Morocco' if morocco else faker.country(),
            price=faker.pyfloat(left_digits=2, right_digits=0, positive=True),
            transport_mode=faker.random_element(elements=('Plane', 'Train', 'Bus')),
            office_id=faker.random_int(min=1, max=3),
            morocco=morocco
        )

    for _ in range(TRIPS_UPCOMING):
        morocco = bool(not faker.random_int(min=0, max=3))

        departure_date = faker.date_time_between(start_date='now', end_date='+1y', tzinfo=None)


        Trip.objects.create(
            departure_date=departure_date,
            arrival_date=departure_date + timedelta(days=faker.random_int(min=1, max=10)),
            destination='Morocco' if morocco else faker.country(),
            price=faker.pyfloat(left_digits=2, right_digits=0, positive=True),
            transport_mode=faker.random_element(elements=('Plane', 'Train', 'Bus')),
            office_id=faker.random_int(min=1, max=3),
            morocco=morocco
        )


def generate_trip_clicks():
    faker = Faker()

    with connection.cursor() as cursor:
        cursor.execute("ALTER TABLE core_tripclick AUTO_INCREMENT = 1;")

    for trip_id in range(TRIPS_COMPLETED + TRIPS_UPCOMING):
        for _ in range(faker.random_int(min=10, max=1000)):
            TripClick.objects.create(
                user_id=faker.random_int(min=1, max=USERS),
                trip_id=trip_id + 1
            )


def generate_bookings():
    faker = Faker()

    with connection.cursor() as cursor:
        cursor.execute("ALTER TABLE core_booking AUTO_INCREMENT = 1;")


    for trip_id in range(TRIPS_COMPLETED):
        for _ in range(faker.random_int(min=5, max=20)):
            Booking.objects.create(
                user_id=faker.random_int(min=1, max=USERS),
                trip_id=trip_id + 1,
                number_of_people=faker.random_int(min=1, max=6)
            )
