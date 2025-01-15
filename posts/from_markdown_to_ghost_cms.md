---
title: 'Creating a Ghost CMS Site from markdown files'
date: '2025-01-15'
tags: 'ghost cms, markdown, tinkering, snippets'
---

This script accepts a directory of markdown files and publishes them to a ghost cms instance.

This is a good way to publish a whole raft of notes very quickly if you have a ghost cms instance setup.

I used this template on github: [clean-docker/ghost-cms](https://github.com/clean-docker/ghost-cms)

This was simply a test to see if it was possible to do this. which it was, unfortunately it doesn't handle snippets very well, and simply ignores syntax highlighting as well as code formatting.

```python
import requests
import markdown2
import jwt
import datetime
import os

# Replace these with your Ghost CMS details
api_url = os.getenv('GHOST_API_URL')
admin_api_key = os.getenv('GHOST_ADMIN_KEY')

def markdown_to_html(file_path):
    # Extract the title from the file name
    title = file_path.split('/')[-1].replace('_', ' ').replace('.md', '')
    # Read the markdown file
    with open(file_path, 'r') as file:
        lines = file.readlines()
    # Remove the first line
    content = ''.join(lines[1:])
    # Convert markdown to HTML
    html = markdown2.markdown(content)
    return title, html

def process_markdown_directory(directory_path):
    results = []
    for file_name in os.listdir(directory_path):
        if file_name.endswith('.md'):
            file_path = os.path.join(directory_path, file_name)
            title, html = markdown_to_html(file_path)
            results.append((title, html))
    return results

# Function to create a JWT token
def create_jwt(api_key):
    key_id, secret = api_key.split(':')
    iat = int(datetime.datetime.now().timestamp())
    header = {'alg': 'HS256', 'kid': key_id}
    payload = {
        'iat': iat,
        'exp': iat + 300,
        'aud': '/v3/admin/'
    }
    token = jwt.encode(payload, bytes.fromhex(secret), algorithm='HS256', headers=header)
    return token

results = process_markdown_directory('./content')
jwt_token = create_jwt(admin_api_key)
for title, html in results:
    print(f"Title: {title}")
    print(f"HTML: {html}\n")
    # Post data
    post_data = {
        'posts': [{
            'title': title,
            'html': html,
            'status': 'draft'
        }]
    }
    headers = {
        'Authorization': f'Ghost {jwt_token}',
        'Content-Type': 'application/json'
    }
    response = requests.post(api_url, json=post_data, headers=headers)
    if response.status_code == 201:
        print('Post created successfully!')
    else:
        print(f'Failed to create post: {response.status_code}')
        print(response.json())
```