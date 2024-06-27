#!/bin/bash
# some basic setup for debian, run this first

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
