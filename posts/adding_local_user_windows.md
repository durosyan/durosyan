---
title: 'Adding local user windows'
date: '2025-01-15'
tags: 'windows, user management, engineering'
---

## How to Add a Local User in Windows 11 24H3

To create a local user account during Windows 11 24H3 setup, follow these steps by [Britec](https://youtu.be/Q3TnVAPPqac) and [CyberCPU Tech](https://youtu.be/Mn9bhG4nWel).

### Pre-Login Setup

The journey begins during the installation phase, particularly when approaching the login stages. Here's what you need to do:

1. **Access Command Prompt During Installation:**
   - Press `Shift + F10` to open the Command Prompt.

2. **Create and Empower a Local User:**
   - Enter the following commands sequentially to add a new administrator account:

```bat
net user Admin /add
net localgroup Administrators Admin /add
cd OOBE
msoobe.exe && shutdown -r
```

   - Allow the system to restart. Once it boots up, just click "Okay," and your new local user account should be recognized.

### Bypass Network Requirement

If you wish to bypass the internet requirement often pushed by Windows setup, follow these steps:

1. **Disconnect From Networks:**
   - Physically disconnect from any networks, or toggle off wireless connections.

2. **Employ the Bypass Trick:**
   - In the Command Prompt, type:

```bat
oobe\bypassnro
```

   - Once executed, choose "I don’t have internet" when it prompts, and proceed to "Create local user."