docker rm --force lan10rd_guacamole || true
docker run \
  -dit \
  -p 8080:8080 \
  --name lan10rd_guacamole \
  -v ~/lan10rd/setup/docker/guacamole/config:/config \
  --restart=always \
  lan10rd/guacamole
docker logs -f lan10rd_guacamole

#   -e "EXTENSIONS=auth-ldap,auth-duo"
# maxwaldorf/guacamoleclear