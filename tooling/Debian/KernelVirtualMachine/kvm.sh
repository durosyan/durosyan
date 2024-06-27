#!/bin/bash

apt update && apt install -y \
	qemu-system-x86 \
	libvirt-daemon-system \
	libvirt-clients \
	bridge-utils \
	virtinst