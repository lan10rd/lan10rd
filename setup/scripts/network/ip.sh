#!/bin/bash

# Find the network IP range
case "$(uname -s)" in
    Linux*)     network=$(ifconfig | grep -E "inet (addr:)?([0-9]{1,3}\.){3}" | grep -v "127.0.0.1" | awk '{print $2}' | awk -F. '{print $1"."$2"."$3}') ;;
    Darwin*)    network=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | awk -F. '{print $1"."$2"."$3}') ;;
    CYGWIN*)    network=$(ipconfig | awk '/IPv4 Address/ {print $NF}' | awk -F. '{print $1"."$2"."$3}') ;;
    *)          echo "Unsupported OS. Exiting..."; exit 1 ;;
esac

# Discover all IP addresses on the network
for i in {1..254}; do 
    ip="$network.$i"
    ping -i 0.2 -c 1 -W 1 "$ip" > /dev/null 2>&1 # ping -c 1 -W 1 "$ip" > /dev/null 2>&1

    if [ $? -eq 0 ]; then
        echo "$ip" # echo "Host $ip is up"
    fi
done
