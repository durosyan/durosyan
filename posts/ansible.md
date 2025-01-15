---
title: 'Ansible first touch hardening'
date: '2025-01-15'
tags: 'engineering, security, automation, tinkering'
---

I'm trying to determine my favourite first touch and hardening setup for windows and debian.

1. **Enable or Disable Windows Firewall Profiles**:
- You can use the `community.windows.win_firewall` module to enable or disable Windows Firewall profiles. This module allows you to control the state of the firewall for specific profiles (e.g., Domain, Private, Public). Here are some examples:

- To enable the firewall for Domain, Public, and Private profiles:
```yaml
- name: Enable firewall for Domain, Public, and Private profiles
  community.windows.win_firewall:
    state: enabled
    profiles:
      - Domain
      - Private
      - Public
  tags: enable_firewall
```

- To disable the Domain firewall:
```yaml
- name: Disable Domain firewall
  community.windows.win_firewall:
    state: disabled
    profiles:
      - Domain
  tags: disable_firewall
```

- To enable the firewall for the Domain profile and block outbound connections:
```yaml
- name: Enable firewall for Domain profile and block outbound connections
  community.windows.win_firewall:
    profiles: Domain
    state: enabled
    outbound_action: block
  tags: block_connection
```

2. **Deploy Specific Firewall Rules**:
- If you need more granular control, you can use the `community.windows.win_firewall_rule` module to create, remove, or update specific firewall rules. For example:

- To allow SMTP traffic on TCP port 25:
```yaml
- name: Firewall rule to allow SMTP on TCP port 25
  community.windows.win_firewall_rule:
    name: SMTP
    localport: 25
    action: allow
    direction: in
    protocol: tcp
    state: present
    enabled: yes
```

- To allow RDP (Remote Desktop) on TCP port 3389:
```yaml
- name: Firewall rule to allow RDP on TCP port 3389
  community.windows.win_firewall_rule:
    name: Remote Desktop
    localport: 3389
    action: allow
    direction: in
    protocol: tcp
    state: present
```