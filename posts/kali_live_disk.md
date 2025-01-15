---
title: 'Kali linux live'
date: '2025-01-15'
tags: 'hacking, privacy, tinkering'
---

I wanted to inspect the disk that gets created when I flash the kali iso to a USB drive. 

Seems to be what it says on the tin.

---

I think this is to mark a partition as the persistant partition for a kali usb?
would be better off configuring it as such in the first place (using the installer)

```bash
#!/bin/bash

usb=/dev/$1
sudo fdisk $usb <<< $(printf "n\np\n\n\n\nw") 
sudo mkfs.ext4 -L persistence /dev/sdb3
sudo mkdir -p /mnt/usb
sudo mount /dev/sdb3 /mnt/usb
echo "/ union" | sudo tee /mnt/usb/persistence.conf
sudo umount /dev/sdb3
```
