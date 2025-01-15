---
title: 'Android custom ROMs'
date: '2025-01-15'
tags: 'engineering'
---

I like this, but it's really confusing and I don't really understand the android ecosystem. 

when using samsung devices, it's even more complicated because they've implemented their own thing called "download mode" and there's only really one way to flash a custom android OS, and that's through a leaked tool called ODIN.

It sucks because the phone I have Samsung A21s A217, seems to be such a specific case for everything, from getting it into a mode which will allow overrites of the firmware, to actually having supported OS builds for the chipset (Exynos).

Feels such a unique thing, that I would be surprised if I could get it working with a custom image.

I would not be surprised if I end up bricking this phone when I try to load in a custom firmware image.

I can barely trust myself to work with android device bridge, let alone flashing something to it.

With this in mind, I have actually managed to get it into a bootloader mode/download mode, and unlock it.

It does warn me everytime I turn it on now that the bootloader is unlocked and software integrity cannot be assured.

I can still enter the bootloader the same way however.

The way I got it into this mode was by:

[Samsung Galaxy Bootloader unlock | youtu.be](https://youtu.be/2guF1N0s8ww)

Pressing both up & down volume buttons, then plug the usb-c port into a laptop.

Presented with a screen to unlock mode, or to continue.

Continuing presents a screen saying "Download, press the volume down & side key to cancel & restart"

DID: 200017ce19056e11
Chip Id/SJTag: 0017ce19056e

[Specification | www.gsmarena.com](https://www.gsmarena.com/samsung_galaxy_a21s-10239.php)

- Model Info: MOBILE SM-A217F BLUE EUA

- [odinflash.com](https://www.odinflash.com/)
- [Android Device Bridge](https://developer.android.com/tools/adb)
- [Bootloader Unlock | tweak droid](https://tweakdroid.com/bootloader/samsung-galaxy-a21s-sm-a217f/#toc8)
- [Graphene OS](https://grapheneos.org/install/web#prerequisites)
- [Kali NetHunter](https://www.kali.org/docs/nethunter/)
- [Kali NetHunter Build | gitlab.com](https://gitlab.com/kalilinux/nethunter/build-scripts/kali-nethunter-devices)
- [source.android.com](https://source.android.com/docs/core)
- [opensource.samsung.com](https://opensource.samsung.com/uploadList)

- SM-A217F
- A217FXXU5CUD1 
- SM-A217F_EUR_RR_Opensource.zip

[generic-kernel-image](https://source.android.com/docs/core/architecture/kernel/generic-kernel-image)

The layer I would probably go for is the vendor image, if I can find a copy of it, since that would work with the system on a chip (exynos) I think.

It would be nice to do this! I could build the source code.

The struggle I am having is to target the hardware, I think i’d need to investigate how to set the build parameters so that it works with it.

And also figure out how to ensure I could actually flash the phone itself.

