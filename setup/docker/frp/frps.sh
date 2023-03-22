docker rm --force frps || true
docker run --restart=always --network host -d -v ~/frps.ini:/etc/frp/frps.ini --name frps snowdreamtech/frps
docker logs -f frps