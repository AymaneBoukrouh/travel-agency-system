#! /bin/bash

# build image
docker compose -f docker-compose.yml -f docker-compose.test.yml build api

# run container and get exit code
docker compose -f docker-compose.yml -f docker-compose.test.yml up api --exit-code-from api --abort-on-container-exit
exit_code=$?

# stop container
docker compose -f docker-compose.yml -f docker-compose.test.yml down

# exit with container exit code
exit $exit_code
