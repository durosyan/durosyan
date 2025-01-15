---
title: 'ollama on wsl'
date: '2025-01-15'
tags: 'engineering, llm, ai'
---

Having recently upgraded to a laptop with a GPU, I want to run my typical setup of WSL and VScode with docker.

I have managed to 

https://ollama.com/blog/ollama-is-now-available-as-an-official-docker-image

https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installation

https://ollama.com/library?sort=newest

I did not have to configure much but I did edit the daemon in both the WSL section and the Daemon config section in docker desktop.

This is what has me a little confused, how does docker desktop interact with the WSL command for docker.

Never the less it all seems to fit together. Meaning I now can create little AI friends yay...

I wonder if I can get siri to enact a shortcut to ping my custom AI friend.

I have to create a service mesh between my little host in AWS and my laptop. since my laptop is only running when I am using it, plus the whole dynamic ip thing.

I'm thinking of the solution where:

```
-> "Hey Siri, Ask Jarvis ..."

-> siri runs shortcut "Ask Jarvis" and fills the prompt with the text ...

-> shortcut sends request to discovery.systemctl.uk

-> EC2 forwards request to connected fulfillment service

-> EC2 responds with the relevant response including service issues.

-> Siri reads shortcut reply
```

This has deffo been done before. I need to think of some steps to take and plan out in more detail.