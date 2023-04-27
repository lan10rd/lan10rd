echo "APT"
echo "..."

echo "\n"
echo "updating"
sudo apt update

echo "\n"
echo "update tools"
sudo apt install -y aptitude

echo "\n"
echo "http utils!"
sudo apt install -y \
    curl \
    wget \
    nmap

echo "\n"
echo "filesystem and disks!"
sudo apt install -y \
    zip \
    unzip \
    mergerfs \
    sshfs \
    rsync \
    exfat-utils \
    exfat-fuse \
    f2fs-tools \
    xfsprogs \
    btrfs-progs \
    zfsutils-linux \
    quota \
    nfs-kernel-server \
    bzip2 \
    gparted

echo "\n"
echo "java!"
# default-jre
sudo apt install -y \
    openjdk-8-jdk \
    openjdk-11-jdk \
    openjdk-17-jdk
    # openjdk-16-jdk \


echo "\n"
echo "genv (go)!"
sudo apt install -y \
    mercurial \
    binutils \
    bison

echo "\n"
echo "shell, dev, compilers!"
sudo apt install -y \
    zsh \
    ksh \
    git \
    gcc \
    g++ \
    make \
    build-essential \
    python3-pip \
    vim \
    autoconf \
    automake \
    libtool \
    sysstat \
    gnupg \
    bats

    # git-all \ #removed cause it brought in apache2 and was running on port 80?!
    # readline \ libreadline-dev ?
    # TODO NEED TO FIND WHERE AND WHY APACHE2 service is on startup, aptitude why apache2 lists a few..
    # sudo systemctl disable apache2 && sudo reboot,  fixed it...

echo "\n"
echo "browser and audio / video!"
sudo apt install -y \
    chromium-browser \
    x11vnc

echo "\n"
echo "network!"
sudo apt install -y \
    dnsutils \
    udftools \
    net-tools \
    samba

echo "\n"
echo "package management and security!"
sudo apt install -y \
    apt-transport-https \
    ca-certificates \
    gnupg-agent \
    software-properties-common \
    linux-headers-generic \
    gdebi \
    locales \
    pv

echo "\n"
echo "security!"
sudo apt install -y \
    openssh-client \
    openssh-server \
    openssl \
    sshpass

echo "\n"
echo "ui custom, gnome!"
sudo apt install -y \
    dconf-editor \
    gnome-tweaks \
    # gnome-tweak-tool \
    gnome-shell-extensions \
    latte-dock

echo "\n"
echo "pyenv (python)"
sudo apt install -y \
    libedit-dev \
    make \
    build-essential \
    libssl-dev \
    zlib1g-dev \
    libbz2-dev \
    libreadline-dev \
    libsqlite3-dev \
    wget \
    curl \
    llvm \
    libncursesw5-dev \
    xz-utils \
    tk-dev \
    libxml2-dev \
    libxmlsec1-dev \
    libffi-dev \
    liblzma-dev \
    libpcre3-dev

# echo "\n"
# echo "pyenv (python)"
# sudo apt install -y \
#     gcc \
#     zlib-devel \
#     bzip2 \
#     bzip2-devel \
#     readline-devel \
#     sqlite \
#     sqlite-devel \
#     openssl-devel \
#     xz \
#     xz-devel \
#     libffi-devel

#     # yum \
#     # install \
