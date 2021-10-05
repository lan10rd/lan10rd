# Check out Pyenv where you want it installed. A good place to choose is $HOME/.pyenv (but you can install it somewhere else):
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
# Optionally, try to compile a dynamic Bash extension to speed up Pyenv. Don't worry if it fails; Pyenv will still work normally:
cd ~/.pyenv && src/configure && make -C src || true
 
# Configure your shell's environment for Pyenv

# Note: The below instructions for specific shells are designed for common shell setups; they also install shell functions into interactive shells only.
# If you have an uncommon setup and/or needs and they don't work for you, use the Advanced Configuration section below to figure out what you need to do in your specific case.

# General MacOS note: Make sure that your terminal app is configured to run the shell as a login shell (especially if you're using an alternative terminal app and/or shell). The configuration samples for MacOS are written under this assumption and won't work otherwise.

# the sed invocation inserts the lines at the start of the file
# after any initial comment lines
sed -Ei -e '/^([^#]|$)/ {a \
export PYENV_ROOT="$HOME/.pyenv"
a \
export PATH="$PYENV_ROOT/bin:$PATH"
a \
' -e ':a' -e '$!{n;ba};}' ~/.profile
echo 'eval "$(pyenv init --path)"' >>~/.profile

echo 'eval "$(pyenv init -)"' >> ~/.bashrc


# Temporary environments (CI, batch jobs):

# In CI/build environments, paths and the environment are usually already set up for you in one of the above ways. You may only need to install Pyenv as a shell function into the (noninteractive) shell that runs the batch script, and only if you need subcommands that require pyenv to be a shell function (e.g. shell and Pyenv-Virtualenv's activate).

source ~/.profile
source ~/.bashrc

# echo 'eval "$(pyenv init -)"'
pyenv install 3.6.0
pyenv install 3.10.0
pyenv install 2.7.13
pyenv global 3.10.0

# for installer
# sudo apt install -y libedit-dev
# curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash
# exec $SHELL
# pyenv update
# pyenv install 2.7.8
# pyenv install 3.10.0

python3 -m pip install --user --upgrade pip
python3 -m pip --version
