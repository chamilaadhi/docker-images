
build
docker build --tag chamila/node-server:1.5 .

Run
docker run -d -p 8080:8080 -v /Users/chamila/WSO2/Training/Docker/confignodeserver/resouce:/home/node/resouce -e EXT_PROPERTY='external' chamila/node-server:1.5