docker rm --force lan10rd_frpc || true
docker run --restart=always --network host -d -v ~/lan10rd/space/setup/frpc.ini:/etc/frp/frpc.ini --name frpc/ snowdreamtech/frpc
docker logs -f lan10rd_frpc