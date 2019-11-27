
build
docker build --tag chamila/node-server:1.5 .

Run
docker run -d -p 8080:8080 -v /Users/chamila/WSO2/Training/Docker/confignodeserver/resouce:/home/node/resouce -e EXT_PROPERTY='external' chamila/node-server:1.5

tagging to push to remote registry
docker tag d3836107b295 gcr.io/chamila-k8s/node-server:1.2

push 
docker push gcr.io/chamila-k8s/node-server:1.2