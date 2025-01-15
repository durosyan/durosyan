---
title: 'Managing Multiple Git Repositories'
date: '2025-01-15'
tags: 'engineering, tinkering, snippets'
---

I had several folders without initialized Git repositories that I needed to upload to GitHub. To automate this process, I used the following script to set up and push all the repositories to their remote origins.

Note: I used a separate script to create all the remote repositories on GitHub.

This process was quick and efficient with the help of AI.

```sh
#!/bin/sh

# Replace these variables with your own values
OWNER="..."
TOKEN="..."

# Define color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get all repositories for the user
repos=$(curl -s -H "Authorization: token $TOKEN" \
-H "Accept: application/vnd.github.v3+json" \
"https://api.github.com/user/repos?per_page=100" | jq -r '.[].name')

# Loop through each repository and get the SSH remote URL
for REPO in $repos; do
    # GitHub API URL
    URL="https://api.github.com/repos/$OWNER/$REPO"

    # Get the repository details
    ssh_url=$(curl -s -H "Authorization: token $TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    $URL | jq -r '.ssh_url')

    if [ -n "$ssh_url" ]; then
        echo "${BLUE}Repository '$REPO' SSH URL: $ssh_url${NC}"
    else
        echo "${RED}Failed to get SSH URL for repository '$REPO'${NC}"
    fi

    # Find the repository in the folder structure based on the repo name
    repo_path=$(find /Volumes/Extreme\ SSD/Projects -type d -name "$REPO" 2>/dev/null)

    if [ -n "$repo_path" ]; then
        echo "${GREEN}Found repository '$REPO' at path: $repo_path${NC}"
    else
        echo "${YELLOW}Repository '$REPO' not found in the folder structure${NC}"
    fi

    if [ -n "$repo_path" ]; then
        cd "$repo_path" || continue
        git remote set-url origin "$ssh_url"
        echo "${GREEN}Updated remote URL for repository '$REPO' to '$ssh_url'${NC}"

        # Add all files and commit them
        git add -A
        git commit -m "init"
        git branch -M main
        git push -u origin main
    fi
done
```