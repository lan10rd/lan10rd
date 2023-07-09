#!/bin/bash

# this setup assumes you are running from a non static ip address and this is your first time running at a new site, this will give you the ability to start websites/webservices and connect to client machines on the same lan.

# so for this to work youll need (1) a domain name (2) a dedicated ip from a service like digital ocean, ie spin up a new droplet, login to that console and git clone lan10rd and run setup-docker-frps.sh script inside setup/docker/frp

# it's recommended to copy setup/docker folder into somewhere like lan10rd/space to keep a clean reference.

# the only configuration change needed is to insert the ip address from your frps instance (you'll also want to add 2 A records (@ and *) in your dns setting)!

cd $(dirname "$0")

docker-compose -d -f host.yaml up