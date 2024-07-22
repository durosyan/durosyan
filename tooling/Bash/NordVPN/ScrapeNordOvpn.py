#!/usr/local/bin/python3.11

import os
import requests
import json
from urllib.parse import urlparse
from bs4 import BeautifulSoup

DEFAULT_OUTPUT='./nord-ovpn/'
URL = "https://nordvpn.com/ovpn"

if not os.path.isdir(DEFAULT_OUTPUT):
    os.mkdir(DEFAULT_OUTPUT)

def download(url, file_name):
    """downloads a file to the default path"""
    try:
        output_file = os.path.join(DEFAULT_OUTPUT, file_name)
        if not os.path.isfile(output_file):
            print('writing ' + output_file)
            with open(output_file, "wb") as file:
                response = requests.get(url)
                file.write(response.content)
        else:
            print(output_file + ' exists, skipping')

    except Exception as e: 
        print(e)
        print('failed download :('+file_name+')')


def extract_filename(url):
    path_array = urlparse(url).path.split('/')
    return path_array[len(path_array)-1]


if __name__ == "__main__":
  print("fetching: "+URL)
  page = requests.get(URL)
  soup = BeautifulSoup(page.text, 'html.parser')
  ListItems = soup.find_all(class_='ListItem')
  for item in ListItems:
      itemLinks = item.find_all('a')
      for link in itemLinks:
          if 'Button--small' in link['class']:
              ovpn_url = link['href']
              ovpn_filename = extract_filename(ovpn_url)
              print('download :('+ovpn_url+')')
              download(ovpn_url, ovpn_filename)

