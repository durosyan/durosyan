---
title: 'Tagging markdown content'
date: '2025-01-15'
tags: 'snippets, tinkering, research'
---

I had a bunch of markdown files filled with notes that I wanted to add to my blog. The challenge was to tag each file with relevant topics. To tackle this, I decided to use a language model and wrote a bash script to automate the tagging process.

Now, all my markdown notes are semantically tagged and ready for the blog! However, there's a small hiccup: all the metadata dates are the same, which looks odd. But that's okay — I plan to review and post each blog entry gradually anyway.

```bash
#!/bin/bash

resolve_tags() {
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

    local title="$1"
    local ai_prompt="Create a series of topic tags from the following title, reply with only the comma separated tags in the format 'tag, tag, tag' no additional information or text, at least one of these tags must be used (Ai, Analysis, Economy, Engineering, Hacking, Philosophy, Research, Snippets, Tinkering, Privacy). The title is: $title"
    local response=$(curl https://api.openai.com/v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPEN_AI_KEY" \
    -d '{
        "model": "gpt-4o",
        "store": true,
        "messages": [
            {"role": "user", "content": "'"$ai_prompt"'"}
        ]
        }' | jq -r '.choices[0].message.content')

    # Parse tags from the response of the AI (lowercase all, tags are separated by commas)
    local tags=$(echo "$response" | tr '[:upper:]' '[:lower:]' | tr -d '\"' | tr -d "'")
    echo "$tags"
}

# Example usage

find . -type f -name "*.md" | while read -r file; do
    first_line=$(head -n 1 "$file")
    echo "Processing file: $file"
    if [[ $first_line != "---" && $first_line == \#* ]]; then
        title=$(echo "$first_line" | sed 's/^# //')
        echo "Title: $title"
        tags=$(resolve_tags "$title")
        {
            echo "---"
            echo "title: '$title'"
            echo "date: '$(date +"%Y-%m-%d")'"
            echo "tags: '$tags'"
            echo "---"
            tail -n +2 "$file"
        } > "$file.tmp" && mv "$file.tmp" "$file"
    fi
done
```