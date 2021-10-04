# face!

face it it's much more fun to have a face for your containers and computers!
This is a fork of dorowu's popular lxde ubuntu image!


## usage

    docker run --shm-size=256m -p 8008:80 lanl0rd/face

*then in a browser navigate to http://localhost:8008*

*for advanced users who are confident in safety of using the hosts resources, you can do things like:*

     docker run --privileged \
        -v /dev/shm:/dev/shm \
        -v /var/run/docker.sock:/var/run/docker.sock:ro \
        -v $HOME:/root/home \
        -p 8008:80 \
        -p 5050:5090 \
        lanl0rd/face

Quick explanation of the magic:

You are running ubuntu with a desktop (face) which passes the video stream (vnc protocol) on an xserver (for the display to be ran "remotely" from a client).  Typically you would use a vnc client (which runs on 5090 normally).
However, inside the image novnc and websockify is turning that vnc stream into a websocket stream which is something browsers can use!  There is a client that is running inside the container (written in vue i believe, based on novnc).  

 Anyway, I just added all the dev tools from all the images I use, thus this image includes the following:

### browsers

firefox, chrome, opera

### text editors

vscode, sublime

### languages/environments

js, typescript, python, node, java, ruby, php, perl, certbot, docker, nginx

### clis/frameworks

#### node (js, ts)
npm, yarn, angular, nest, express, vue, react, svelte, nx

#### java
spring, maven, gradle

#### go
revel, gin, beego, fasthttp, goji, gomartini, gorilla, labstack, negroni, buffalo

#### python
cherrypy, sanic, flask, django, aiohttp[speedups], tornado, dash, falcon, bottle, hug

#### ruby
rails

#### perl
Dancer2

#### php
 phalcon (tbd)
