<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ yarn install
```

```bash
$ npm i -g @nestjs/cli
```

```bash
$ docker-compose up -d
```

## Clone file

```bash
$ cp .env.example .env
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Running Seeders

```bash
localhost:3000/api/v2/seeders (get)
```

## Redeploy without changes

```bash
$ git commit --allow-empty -m "Trigger Heroku deploy"
$ git push heroku <branch>
```

## Deploy

```bash
https://pokedex-andresdavidsv.herokuapp.com/
```

# Docker

## Build
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

## Run
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up

## Nota
Por defecto, __docker-compose__ usa el archivo ```.env```, por lo que si tienen el archivo .env y lo configuran con sus variables de entorno de producción, bastaría con
```
docker-compose -f docker-compose.prod.yaml up --build
```

## Stack

- MongoDB
- Mongoose
- Nest
- TypeSccript

## Stay in touch

- Author - [Andrés David Solarte Vidal](https://andresdavidsv.com)
- Twitter - [@andresdavidsv](https://twitter.com/andresdavidsv)

## License

Nest is [MIT licensed](LICENSE).
