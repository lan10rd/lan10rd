echo "calling sudo setup"

sudo -c sh "sh setup-sudo.sh"
bash ./js/js.sh # dont think you need sudo for here?
bash ./java/java.sh
bash ./go/go.sh
bash ./py/py.sh
bash ./nginx/nginx.sh