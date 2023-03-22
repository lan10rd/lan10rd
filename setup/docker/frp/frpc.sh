docker rm --force frpc || true
docker run --restart=always --network host -d -v ~/lan10rd/space/setup/frpc.ini:/etc/frp/frpc.ini --name frpc snowdreamtech>
docker logs -f frpc