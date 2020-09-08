import React from 'react';
import './App.css';
import CustomTracer from './customTracer/Tracer';
import Axios from 'axios';
const {
  BatchRecorder
} = require("zipkin");
const {
  HttpLogger
} = require("zipkin-transport-http");
const ZipkinJavascriptOpentracing = require("zipkin-javascript-opentracing");

const recorder = new BatchRecorder({
  logger: new HttpLogger({
    endpoint: "http://localhost:9411/api/v1/spans"
  })
});

const zipkinTracer = new ZipkinJavascriptOpentracing({
  serviceName: "My Service",
  recorder,
  kind: "client"
});

const onClickOfZipkinTracer = async () => {
  const span = zipkinTracer.startSpan("ZipkinTracerSpan");
  span.log({
  logMsg:"Logging in Zipkin Tracer"
  });
  span.setTag("TagInZipkin","Foo")
  const data = await Axios.get('/');
  console.log(data.data);
  span.finish();
}

const onClickOfCustomTracer = async () => {
  const customTracer = new CustomTracer({
    url: "http://localhost:9411/api/v1/spans",
    interval: 100,
    serviceName: "Custom Tracer"
  });
  const span = customTracer.startSpan("CustomTracerSpan");
  span.log("Logging in Custom tracer");
  span.log("Logging again in Custom tracer");
  span.setTag("TagInZipkin","Foo")
  const data = await Axios.get('/');
  console.log(data.data);
  span.finish();
}

function App() {
  return ( 
    <div className = "App" >
    <h1 > Tracing in Zipkin Tracer Vs Custom Tracer </h1>
     <button onClick={() => onClickOfZipkinTracer()} class = "button button1" > Press To See Zipkin Tracer In Action </button> 
     <button onClick={() => onClickOfCustomTracer()} class = "button button1" > Press To See Custom Tracer In Action </button> 
     </div>
  );
}

export default App;