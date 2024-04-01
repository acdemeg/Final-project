# Online Shop Demo

Live DEMO: http://45.90.218.76:8001/

This repo contains project of online-shop based on next 
tech stack: ReactJs, Redux, Scss, NodeJs, Sequelize, Koa2Js, Postgresql.

## Test credentials for App
For ADMIN:
* login: admin@google.com 
* password: admin_passw

For USER:
* login: joo@google.com
* password: john_passw

## Requirements:
1. Node v12.x (you could try v10)
2. NPM v6.x

## How to install requirements:
1. `npm install`
1. `(cd ./backend && npm install)`
2. `(cd ./frontend && npm install)`
2. `(cd ./frontend && npm run build)`

## Repo contains
1. Backend template: 'backend' folder
2. Frontend template: 'frontend folder
3. Database backups: 'ops' folder

docker-compose file uses postgres as database.
You can change db_user and db_password in docker-compose.yml file.

For migration: npx sequelize-cli db:migrate --url 'postgres://postgres:lineate@localhost:5440/lntsunday'

## How to use Docker:
Run all commands project root folder

### Start containers
`docker-compose up -d`
### Show logs containers
`docker-compose logs -f web`

## How to run app:
1. `docker-compose up -d`
2. Go to http://localhost:8001

## How to watch static:
`cd ./frontend && npm run watch`

# DB commands
## Make a dump
`docker-compose exec db sh -c 'exec pg_dump -U postgres lntsunday > /backup/dump.sql'`

## Restore from the dump
`docker-compose exec db sh -c 'exec psql -U postgres lntsunday < /backup/dump.sql'`

# Useful commands
## Clean all docker containers info
`docker-compose stop && docker-compose down --rmi local --volumes --remove-orphans`


# Example screenshots

![](./screenshots/addProduct.png?raw=true "Optional Title")
<br /><br />
![](./screenshots/CRUD.png?raw=true "Optional Title")
<br /><br />
![](./screenshots/ModifyProduct.png?raw=true "Optional Title")
<br /><br />
![](./screenshots/Screenshot-1.png?raw=true "Optional Title")
<br /><br />
![](./screenshots/Screenshot-2.png?raw=true "Optional Title")
<br /><br />
![](./screenshots/Screenshot-3.png?raw=true "Optional Title")
<br /><br />
![](./screenshots/Screenshot-4.png?raw=true "Optional Title")
<br /><br />
![](./screenshots/Screenshot-5.png?raw=true "Optional Title")
<br /><br />
![](./screenshots/Screenshot-6.png?raw=true "Optional Title")
<br /><br />
![](./screenshots/Screenshot-7.png?raw=true "Optional Title")
<br /><br />
![](./screenshots/Screenshot-8.png?raw=true "Optional Title")
