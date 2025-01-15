---
title: 'Docker'
date: '2025-01-15'
tags: 'engineering, tinkering, snippets'
---

# Docker System Services: Simplifying Complex Deployments

In the rapidly evolving world of containerization and microservice architectures, Docker has established itself as an essential tool for developers seeking flexibility and efficiency in managing applications. While Docker Swarm offers the promise of seamless scaling and automation, it inherently introduces a layer of complexity that may not be necessary for every application. This blog post explores the idea of hosting critical services on individual machines to strike a balance between manageability and performance.

## A Modular Approach

The transition to a more modular hosting setup involves a strategic distribution of services across dedicated machines. One might consider hosting GitLab, a prominent DevOps tool, on a separate machine from other applications. This allows for an isolated and optimized build environment, paving the way for a stable "Production" Environment.

### Hosting GitLab

The marriage between Docker and GitLab is a powerful one, enabling seamless CI/CD operations. Through a straightforward Docker Compose setup, GitLab can be deployed using the following configuration:

```yaml
version: "3.6"
services:
  gitlab:
    image: gitlab/gitlab-ee:latest
    ports:
      - "22:22"
      - "80:80"
      - "443:443"
    volumes:
      - $GITLAB_HOME/data:/var/opt/gitlab
      - $GITLAB_HOME/logs:/var/log/gitlab
      - $GITLAB_HOME/config:/etc/gitlab
    shm_size: '256m'
    environment:
      GITLAB_OMNIBUS_CONFIG: "from_file('/omnibus_config.rb')"
    configs:
      - source: gitlab
        target: /omnibus_config.rb
    secrets:
      - gitlab_root_password
  gitlab-runner:
    image: gitlab/gitlab-runner:alpine
    deploy:
      mode: replicated
      replicas: 4
configs:
  gitlab:
    file: ./gitlab.rb
secrets:
  gitlab_root_password:
    file: ./root_password.txt
```

This configuration ensures secure and efficient handling of repositories with seamless scalability via GitLab runners.

### Introducing Unifi and ProjectSend

Beyond GitLab, Unifi and ProjectSend serve diverse needs. Unifi's Docker configuration supports robust network management, integrating MongoDB effortlessly to scale with user demands. Here's a simplified version of the configuration for Unifi:

```yaml
image: lscr.io/linuxserver/unifi-network-application:latest
container_name: unifi-network-application
environment:
  - PUID=1000
  - PGID=1000
  - TZ=Etc/UTC
  - MONGO_USER=unifi
  - MONGO_PASS=
  - MONGO_HOST=unifi-db
  - MONGO_PORT=27017
  - MONGO_DBNAME=unifi
volumes:
  - /path/to/data:/config
ports:
  - 8443:8443
  - 3478:3478/udp
  - 10001:10001/udp
restart: unless-stopped
```

Similarly, ProjectSend acts as a convenient Dropbox alternative, facilitating file transfers with unmatched ease:

```yaml
image: lscr.io/linuxserver/projectsend:latest
container_name: projectsend
environment:
  - PUID=1000
  - PGID=1000
  - TZ=Etc/UTC
  - MAX_UPLOAD=5000
volumes:
  - <path to data>:/config
  - <path to data>:/data
ports:
  - 80:80
restart: unless-stopped
```

## Conclusion

In conclusion, the judicious deployment of Docker services across dedicated machines can simplify the complexity commonly associated with a containerized environment. This modularity not only enhances efficiency but also provides the flexibility necessary to tailor the infrastructure to specific needs and scale as required. As organizations continue to embrace microservices, this strategic approach to Docker deployment ensures a robust, adaptable, and manageable system architecture.
