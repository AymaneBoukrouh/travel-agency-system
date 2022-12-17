#! /bin/bash

# build image
docker compose -f docker-compose.yml -f docker-compose.test.yml --project-name test build db api

# run container and get exit code
docker compose -f docker-compose.yml -f docker-compose.test.yml --project-name test up db api --exit-code-from api --abort-on-container-exit
exit_code=$?

# stop container
docker compose -f docker-compose.yml -f docker-compose.test.yml --project-name test down

# exit with container exit code
exit $exit_code
