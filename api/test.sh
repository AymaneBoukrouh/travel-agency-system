#! /bin/bash

# build image
docker compose -f docker-compose.yml -f docker-compose.test.yml build

# run container
docker compose -f docker-compose.yml -f docker-compose.test.yml up api -d

# run tests
docker compose -f docker-compose.yml -f docker-compose.test.yml run api python manage.py test

# stop container
docker compose down
