# Bootcamp GoBarber

## How to run
node src/server.js para rodar
yarn sucrase-node src/server.js

yarn dev
yarn dev:debug

## Dependencies
- ExpressJS for the API
- Sucrase to use new javascript functionalities which NodeJS doesn't support.
- Docker
- Sequelize

## Docker

- docker postgress - https://hub.docker.com/_/postgres

````
# to create one container
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

# stop all containers
docker kill $(docker ps -q)

# stop one specific container
docker stop database

# remove all containers
docker rm $(docker ps -a -q)

# remove all docker images
docker rmi $(docker images -q)

# to see all existent containers
docker ps -a

# to see all running containers
docker ps

# to start one specific container
docker start database

# logs
docker logs database
````

## Lint

Lint of all js
`yarn eslint --fix src --ext .js`
