docker run \
  -dit \
  -p 8080:8080 \
  --name lan10rd_guacamole \
  -v ~/lan10rd/setup/guacamole/config:/config \
  --restart=always \
  lan10rd/guacamole

#   -e "EXTENSIONS=auth-ldap,auth-duo"
# maxwaldorf/guacamoleclear