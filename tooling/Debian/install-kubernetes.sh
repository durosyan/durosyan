#!/usr/bin/bash

apt-get update
apt-get upgrade

# install vagrant repo
# https://developer.hashicorp.com/vagrant/install
wget -O- https://apt.releases.hashicorp.com/gpg \
    | gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg \
    echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" \
    | tee /etc/apt/sources.list.d/hashicorp.list

# Install k8s repo
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key \
    | gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg \
    echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /' \
    | tee /etc/apt/sources.list.d/kubernetes.list

apt update

apt install \
    vagrant \
    vagrant-libvirt \
    qemu-system \
    libvirt-daemon-system \
    libvirt-dev \
    virt-manager \
    kubelet \
    kubeadm \
    kubectl

# sudo apt-mark hold kubelet kubeadm kubectl

adduser frigne libvirt

pipx install --include-deps ansible
pipx inject --include-apps ansible argcomplete
pipx ensurepath
echo 'eval "$(register-python-argcomplete pipx)"' >> ~/.bashrc

vagrant plugin install vagrant-libvirt