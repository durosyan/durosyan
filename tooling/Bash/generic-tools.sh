#!/bin/sh
# some basic setup for debian, run this first

if ! command -v lsb_release &> /dev/null; then
    echo "lsb_release command not found."
    exit 1
fi

if [ "$(lsb_release -si)" != "Debian" ]; then
    echo "Operating system is not Debian"
    exit 1
fi

# template
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
echo "working from: ".$SCRIPT_DIR

sudo apt-get install \
    build-essential \
    pipx \
    curl \
    vim \
    apt-transport-https \
    ca-certificates \
    htop \
    linux-headers-$(uname -r) \
    software-properties-common

# Couldn't find a package for reversi (unknown source)
sudo apt purge aisleriot gnome-robots gnome-sudoku ace-of-penguins gbrainy gnome-mines five-or-more four-in-a-row hitori gnome-chess tali gnome-klotski gnome-mahjongg gnome-nibbles quadrapassel gnome-tetravex swell-foop gnome-taquin lightsoff
sudo apt purge libreoffice*

# Vim explorer
git clone https://github.com/preservim/nerdtree.git ~/.vim/pack/vendor/start/nerdtree
vim -u NONE -c "helptags ~/.vim/pack/vendor/start/nerdtree/doc" -c q
