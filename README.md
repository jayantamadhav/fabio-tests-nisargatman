# Vector.ai Full stack assignment

This project has 3 core components which are dockerized using docker-compose. 

1. Database : ```Postgresql```
2. Service : ```FastAPI``` 
3. Client : ```React```

_Note: .env files are excluded from .gitignore(and therefore are added to git commits and repo) just for the sake of simplicity. In good practices .env should not be included in git commits._
\
&nbsp;

>## Install & run

``` bash
docker-compose up -d --build
```

>## Check logs
``` bash
docker-compose logs -f {docker-compose-service-name}
```

>## Stop 
```
docker-compose down
```

\
&nbsp;

## Service

```api/service``` folder contains source required to build an image using the Dockerfile. The service is build using ```FastAPI```.

## Client

```client``` folder contains source code for the client-side application that is build using ```React```. 