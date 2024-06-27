#!/bin/bash

if [ $(dpkg-query -W -f='${Status}' qemu-system-x86 2>/dev/null | grep -c "ok installed") -eq 0 ];
then
  echo "qemu-system-x86 is not installed"
else
  echo "qemu-system-x86 is installed"
fi

if [ $(dpkg-query -W -f='${Status}' libvirt-daemon-system 2>/dev/null | grep -c "ok installed") -eq 0 ];
then
  echo "libvirt-daemon-system is not installed"
else
  echo "libvirt-daemon-system is installed"
fi

if [ $(dpkg-query -W -f='${Status}' libvirt-clients 2>/dev/null | grep -c "ok installed") -eq 0 ];
then
  echo "libvirt-clients is not installed"
else
  echo "libvirt-clients is installed"
fi
