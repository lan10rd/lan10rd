/* default config */

--verdaccio/conf/config.yaml
storage: ./storage
auth:
  htpasswd:
    file: ./htpasswd
uplinks:
  npmjs:
    url: https://registry.npmjs.org/
packages:
  "@*/*":
    access: $all
    publish: $authenticated
    proxy: npmjs
  "**":
    proxy: npmjs
logs:
  - { type: stdout, format: pretty, level: http }
--verdaccio/plugins
--verdaccio/storage



--verdaccio/conf/docker.sh
docker run -it --detach \
    --publish 4873:4873 \
    --volume `pwd`/../conf:/verdaccio/conf \
    --volume `pwd`/../storage:/verdaccio/storage \
    --volume `pwd`/../plugins:/verdaccio/plugins \
    --name verdaccio \
    verdaccio/verdaccio


/* npm i */
npm install --registry http://localhost:4873

/* publish */
npm adduser --registry http://localhost:4873

