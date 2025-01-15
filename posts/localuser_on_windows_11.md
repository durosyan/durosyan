---
title: 'Localuser on windows 11'
date: '2025-01-15'
tags: 'windows 11, localuser, privacy'
---

# How to Enable a Local User Account When Installing Windows 11 as a Virtual Machine

If you're looking to create a local user account on Windows 11 during a virtual machine (VM) installation, you’ll be pleased to know there are straightforward methods to achieve this. Here, we’ll explore two different techniques you can use to enable a local user account without the need for online credentials or internet connectivity.

## Method 1: Adding a Local User with Command Prompt

This approach requires a few steps during the installation process by utilizing the Command Prompt. Here’s how to do it:

1. During the installation process, once you reach the login stages, press **Shift + F10**. This will open the Command Prompt.
2. Enter the following commands sequentially:

    ```shell
    net user Admin /add
    net localgroup Administrators Admin /add
    cd OOBE
    msoobe.exe && shutdown -r
    ```

3. After the system restarts, you’ll simply need to click “Okay” to finalize the process.

This method effectively creates an admin-level local user account without the hassle of online logins during setup.

## Method 2: Offline Installation to Bypass Network Requirements

If you prefer to keep your VM installation entirely offline until the system is fully set up, this method is for you. Here's the step-by-step process:

1. Disconnect your VM from any network connections before starting the installation.
2. When prompted for a network connection, run the following command to bypass the requirement:

    ```shell
    oobe\bypassnro
    ```

3. You will then have the option to click "I don't have internet."
4. Proceed with creating a local user account as prompted by the installation wizard.

Both of these methods offer an effective way to set up a Windows 11 VM with a local user account, enabling you to bypass the mandatory network and Microsoft account requirements that typically come with standard installations.

For those who prefer visual guidance, there are excellent tutorials available on YouTube by [Britec](https://youtu.be/Q3TnVAPPqac) and [CyberCPU Tech](https://youtu.be/Mn9bhG4nWel), showcasing these processes in detail. Whether you’re setting up a test environment or a dedicated offline system, these tips ensure you can customize your Windows 11 installation to best suit your needs.
