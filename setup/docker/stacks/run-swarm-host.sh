docker stack deploy --prune -c ./frpc.yaml lan10rd
docker stack deploy --prune -c ./guacamole.yaml lan10rd
docker stack deploy --prune -c ./nginx-proxy-manager.yaml lan10rd