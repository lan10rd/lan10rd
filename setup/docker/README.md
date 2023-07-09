On Windows/Apple/Ubuntu you'll hopefully just need VS Code, git, and Docker installed.

it is recommended to copy this folder to ~/lan10rd/space that way you leave a reference implementation but can modify your local config as necessary.

Before starting you'll need a tunnel (frps) with a static ip. This isn't so crazy to do but it makes it so your home/office ip is not known to the outside world. You'll need to get an instance on some service provider like digital ocean (this can be skipped but youll need to configure your home router, not as fun or easy sometimes). You'll also just wanna comment out the frpc service in host.yaml.

You'll also want to buy a domain name and be ready to change the DNS to point to your static ip.

You should be able to run host.sh from git bash/terminal. 

Once you have host services running from host.yaml, you'll want to go to localhost:81 (or your host's ip) and test nginx-proxy-manager is up and running. if it is, awesome almost there, login to your domain name registrar and point A * and @ records to your ip (the ip running frps, should be a static ip but will tunnel to your box running frpc).

Try to hit your box from the name name (just on port 80) and you should see nginx hello world page.

go back to nginx proxy manager and setup 2 proxy hosts

(1) this proxy is to be able to login to node proxy manager (you can iframe later with a different environment variable)
Details
domain:   proxy-manager.YOUR_DOMAIN
SCHEME   Foward hostname / IP    Forward port
http     0.0.0.0                 81

SSL
Force SSL, HTTP 2 support, and generate new ssl certificate 


(2) this proxy is for guacamole, so nice to be able to login to your host machine remotely

Details
domain:  guac.YOUR_DOMAIN

SCHEME   Foward hostname / IP    Forward port
http     host.docker.internal    8080

SSL
Force SSL, HTTP 2 support, and generate new ssl certificate 

Advanced

location /guacamole/ {
    proxy_pass http://host.docker.internal:8080/guacamole/;
    proxy_buffering off;
    proxy_http_version 1.1;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $http_connection;
    access_log off;
}



If everything worked you should be able to access your host machine from the outside world! 

Here is a quick guide for guacamole setup with windows/ubuntu/apple machines, you'll hopefully be able to run ftp or sftp servers on them.