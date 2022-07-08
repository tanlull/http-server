## A simple http server 
config file : /config

### Run 
```
    node app.js
```

# Docker (optinal)
## Run via Docker 
```
docker build -t drtan/node-express-http-server:1.0.0 .
```
## Run via Docker 
```
docker run --restart=always --name http-server -d -p 8888:80 drtan/node-express-http-server:1.0.0
```

## test 
http://localhost:8888