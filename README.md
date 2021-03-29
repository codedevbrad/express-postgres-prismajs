### Server and prisma running in a container with PostgreSQL in a container.
* cannot run prisma currently in a container.
*

### PostgreSQL.

* docker run --name postgres-0 -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:latest
* docker exec -it postgres-0 bash
* psql -U postgres
* create database test;

* docker container prune
* docker image rm { image_id }

### localhost is now working.
 * opened virtualbox
 * Settings
 * Network > Adapter 1 > Advanced > Port Forwarding
 * Click "+" to add a new Rule
 * Set Host Port 8080 & Guest Port 8080; be sure to leave Host IP and Guest IP empty

 * docker run -p 8080:8080 ${image_id}
 * navigate to localhost:8080.

### useful articles for help
 * https://stackoverflow.com/questions/42866013/docker-toolbox-localhost-not-working
 * https://stackoverflow.com/questions/51573572/unable-to-access-the-docker-nodejs-container-on-the-browser
