#!/bin/sh
# https://docs.nvidia.com/cuda/cuda-installation-guide-linux/#debian

OS_TYPE=false

if ! command -v lsb_release &> /dev/null; then
    echo "lsb_release command not found."
    exit 1
fi

if [ "$(lsb_release -si)" = "Debian" ]; then
    OS_TYPE=true
elif [ -f /etc/os-release ]; then
    . /etc/os-release
    if [ "$ID" = "debian" ]; then
        OS_TYPE=true
    fi
fi

if OS_TYPE; then
    sudo apt-get install linux-headers-$(uname -r)
    sudo apt-get install software-properties-common

    sudo wget https://developer.download.nvidia.com/compute/cuda/repos/debian12/x86_64/cuda-keyring_1.1-1_all.deb
    sudo dpkg -i cuda-keyring_1.1-1_all.deb
    sudo add-apt-repository contrib
    sudo apt-get update
    sudo apt-get -y install cuda-toolkit-12-4
    sudo apt-get install -y nvidia-kernel-open-dkms
    sudo apt-get install -y cuda-drivers

    # Install nvidia container toolkit
    curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
    curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
        sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
        sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

    sudo apt-get update
    sudo apt-get install -y nvidia-container-toolkit
fi