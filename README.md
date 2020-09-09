# # demo-for-quickbytes-custom-tracer

before running any tracer example make sure you run zipkin in docker for both ui and collector with following command

# docker run -d -p 9411:9411 openzipkin/zipkin


you can also run jaegar in docker with this command

docker run -d --name jaeger \
  -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 \
  -p 5775:5775/udp \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 14268:14268 \
  -p 14250:14250 \
  -p 9411:9411 \
  jaegertracing/all-in-one:1.19

then run UI App with following command:

### npm start

ensure that there is simple server(any language) running on port 8081.

You can also run following command:

### node index.js
