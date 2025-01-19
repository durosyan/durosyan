---
title: 'Adding local user in windows'
date: '2025-01-19'
tags: 'windows, user management, engineering'
---

## How to Add a Local User in Windows 11 24H3

To create a local user account during Windows 11 24H3 setup, follow these steps by [Britec](https://youtu.be/Q3TnVAPPqac) and [CyberCPU Tech](https://youtu.be/Mn9bhG4nWel).

### Why Create a Local User?

Creating a local user provides several advantages:
- **Privacy:** Keeps your data local without syncing to the cloud.
- **Security:** Reduces exposure to online threats.
- **Control:** Full control over user settings and permissions.
- **Offline Access:** Use your machine without needing an internet connection.

### Downsides of Creating a Local User

While creating a local user has its benefits, there are also some downsides to consider:
- **Limited Features:** Some Windows features and apps require a Microsoft account to function fully.
- **No Cloud Sync:** You won't have access to cloud-based services like OneDrive for automatic backups and file synchronization.
- **Manual Updates:** You may need to manually check for and install updates for certain apps and services.
- **Restricted Access:** Some services and apps may not be accessible without an internet connection or a Microsoft account.
- **Device Recovery:** In case of device loss or failure, recovering data might be more challenging without cloud backups.

### Does This Help with OpSec?

Yes, creating a local user can enhance operational security (OpSec) in several ways:

- **Reduced Attack Surface:** By not using a Microsoft account, you minimize the exposure to potential online threats.
- **Data Privacy:** Your data remains local, reducing the risk of data breaches and unauthorized access.
- **Controlled Environment:** You have full control over the user environment, which can be tailored to meet specific security requirements.
- **Offline Operation:** The ability to operate offline reduces the risk of remote attacks and unauthorized access through the internet.

However, it's important to weigh these benefits against the potential downsides, such as limited access to certain features and services that require a Microsoft account.

---

### Pre-Login Setup

1. **Access Command Prompt During Installation:**
   - Press `Shift + F10` to open the Command Prompt.

2. **Create a Local User:**
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

2. **Bypass:**
   - In the Command Prompt, type:

```bat
oobe\bypassnro
```

   - Once executed, choose "I don’t have internet" when it prompts, and proceed to "Create local user."