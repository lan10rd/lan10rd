# sudo apt install default-jre

# Managing Java
# You can have multiple Java installations on one server. You can configure which version is the default for use on the command line by using the update-alternatives command.

# sudo update-alternatives --config java

# Setting the JAVA_HOME Environment Variable
# Many programs written using Java use the JAVA_HOME environment variable to determine the Java installation location.

# To set this environment variable, first determine where Java is installed. Use the update-alternatives command:

# sudo update-alternatives --config java


# Download
# Linux / OS X
git clone https://github.com/jenv/jenv.git ~/.jenv
# Mac OS X via Homebrew
# brew install jenv

# Installation
# Dash
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.profile
echo 'eval "$(jenv init -)"' >> ~/.profile
exec $SHELL -i
# Plugins
# ensure that JAVA_HOME is correct
jenv enable-plugin export
# make Maven aware of the Java version in use (and switch when your project does)
jenv enable-plugin maven
exec $SHELL -i
# Bash
# echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.bash_profile
# echo 'eval "$(jenv init -)"' >> ~/.bash_profile
# Zsh
# echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
# echo 'eval "$(jenv init -)"' >> ~/.zshrc

# Configure
# jenv add /System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
# oracle64-1.6.0.39 added
# jenv add /Library/Java/JavaVirtualMachines/jdk17011.jdk/Contents/Home
# oracle64-1.7.0.11 added

# List managed JDKs
# jenv versions
#   system
#   oracle64-1.6.0.39
# * oracle64-1.7.0.11 (set by /Users/hikage/.jenv/version)
# Configure global version
# $ jenv global oracle64-1.6.0.39
# Configure local version (per directory)
# $ jenv local oracle64-1.6.0.39
# Configure shell instance version
# $ jenv shell oracle64-1.6.0.39


# usage / guide
# ls /usr/lib/jvm
# jenv add /usr/lib/jvm/java-17-openjdk-arm64/
# jenv versions
# jenv global 17
# jenv version