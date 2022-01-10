docker run \
  -p 8080:8080 \
  -v ~/lan10rd/setup/guacamole/config:/config \
  lan10rd/guacamole
  
#   -e "EXTENSIONS=auth-ldap,auth-duo"
# maxwaldorf/guacamole