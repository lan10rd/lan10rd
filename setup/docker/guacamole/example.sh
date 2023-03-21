docker run \
  -dit \
  -p 8080:8080 \
  --name lan10rd_guacamole \
  -v ~/lan10rd/setup/docker/guacamole/config:/config \
  --restart=always \
  oznu/guacamole

#   -e "EXTENSIONS=auth-ldap,auth-duo"
# maxwaldorf/guacamoleclear