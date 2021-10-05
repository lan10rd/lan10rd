# Import the public key used by the package management system.¶
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

# The operation should respond with an OK. However, if you receive an error indicating that gnupg is not installed, you can:
# sudo apt-get -y install gnupg
# wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

# Create a list file for MongoDB.
# Create the list file /etc/apt/sources.list.d/mongodb-org-5.0.list for your version of Ubuntu.

# Click on the appropriate tab for your version of Ubuntu. If you are unsure of what Ubuntu version the host is running, open a terminal or shell on the host and execute lsb_release -dc.

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org

