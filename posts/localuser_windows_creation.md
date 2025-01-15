---
title: 'Adding local user windows 11 24H3'
date: '2025-01-15'
tags: 'windows 11, local user, tinkering'
---

[Britec | youtube](https://youtu.be/Q3TnVAPPqac)
[CyberCPU Tech | youtube](https://youtu.be/Mn9bhG4nWel)

---

These are two different ways to enable a local user when installing windows 11 as a VM.

## Add a local user with net user

Run this using shift + f10 during installation when reaching login stages.

```
net user Admin	/add
net localgroup Administrators Admin /add
cd OOBE
msoobe.exe && shutdown -r
```

after restart just click okay.

---

## Offline install

Disconnect the VM from networks, then run this to bypass the network requirement

```
oobe\bypassnro
```

Click `I don't have internet` and then create a local user.
