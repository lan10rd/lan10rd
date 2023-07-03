docker run --name some-sftpgo \
    -p 8080:8080 \
    -p 2022:2022 \
    -p 2121:2121 \
    -p 50000-50100:50000-50100 \
    -v ${HOME}/lan10rd/setup/docker/sftpgo/backups:/srv/sftpgo/backups \
    -v ${HOME}/lan10rd/setup/docker/sftpgo/data:/srv/sftpgo/data \
    -v ${HOME}/lan10rd/setup/docker/sftpgo/home:/var/lib/sftpgo \
    -d "drakkan/sftpgo"