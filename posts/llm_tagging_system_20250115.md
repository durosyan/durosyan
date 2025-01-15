---
title: 'llm tagging system'
date: '2025-01-15'
tags: 'ai, snippets, research'
---

I designed this script to be able to quickly create and semantically tag blog content from the command line.

The content itself is not ai generated, only the tags.

Usage:

```bash
./new_entry.sh 'blog title'
```

Script:

```bash
#!/bin/bash
if [[ $# -gt 1 ]]; then
    echo "Error: Title should be a single argument. If it contains spaces, enclose it in quotes."
    exit 1
fi

if [[ -z $1 ]]; then
    read -p "Enter the title of your journal entry: " title
else
    title=$1
fi

if [[ -f .env ]]; then
    export $(grep -v '^#' .env | xargs)
else
    echo ".env file not found. Exiting..."
    exit 1
fi

if [[ -z $OPEN_AI_KEY ]]; then
    echo "OPEN_AI_KEY is not set in the .env file. Exiting..."
    exit 1
fi

ai_prompt="Create a series of topic tags from the following title, reply with only the comma separated tags in the format 'tag, tag, tag' no additional information or text, at least one of these tags must be used (Ai, Analysis, Economy, Engineering, Hacking, Philosophy, Research, Snippets, Tinkering). The title is: "$title
response=$(curl https://api.openai.com/v1/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $OPEN_AI_KEY" \
-d '{
    "model": "gpt-4o",
    "store": true,
    "messages": [
        {"role": "user", "content": "'"$ai_prompt"'"}
    ]
    }' | jq -r '.choices[0].message.content')

if [[ -z $response ]]; then
    echo "Error calling openai. Exiting..."
    exit 1
fi

# Parse tags from the response of the AI (lowercase all, tags are separated by commas)
tags=$(echo "$response" | tr '[:upper:]' '[:lower:]' | tr -d '\"' | tr -d "'")
echo "Tags: $tags"

if [[ ! -z $title ]]; then
    filetitle=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '_')
    filename=$filetitle"_$(date +%Y%m%d)"
    cat << EOF > $filename.md
---
title: '$title'
date: '$(date +"%Y-%m-%d")'
tags: '$tags'
---
EOF
    echo "Created new blog entry: $filename.md"
else
    echo "No title entered. Exiting..."
    exit 1
fi
```