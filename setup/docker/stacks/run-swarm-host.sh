# run this after you have a domain name, then on a dedicated ip provider run frps (instructions in frp folder setup-docker-frps.sh)  dont forget to add the static ip to your frpc.ini file, but thats it...i like digital ocean, pull lan10rd, and run setup docker frps, then run frps.yaml 

docker stack deploy --prune -c ./frpc.yaml lan10rd
docker stack deploy --prune -c ./guacamole.yaml lan10rd
docker stack deploy --prune -c ./nginx-proxy-manager.yaml lan10rd