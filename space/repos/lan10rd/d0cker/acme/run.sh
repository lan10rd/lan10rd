docker run --rm --name acmedns                 \
 -p 53:53                                      \
 -p 53:53/udp                                  \
 -p 80:80                                      \
 -v $(pwd)/config:/etc/acme-dns:ro      \
 -v $(pwd)/data:/var/lib/acme-dns       \
 -d lanl0rd/acme:test