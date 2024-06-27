# install packages for libvirt/kvm
# sudo apt -y install bridge-utils cpu-checker libvirt-clients libvirt-daemon qemu qemu-kvm

# create a basic virtual machine..
#sudo virt-install \
#  --name ubuntu-guest \
#  --os-variant ubuntu20.04 \
#  --vcpus 2 \
#  --ram 2048 \
#  --location http://ftp.ubuntu.com/ubuntu/dists/focal/main/installer-amd64/ \
#  --network bridge=virbr0,model=virtio \
#  --graphics none \
#  --extra-args='console=ttyS0,115200n8 serial'

