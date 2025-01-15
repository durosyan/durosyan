---
title: 'HEIC Conversion'
date: '2025-01-15'
tags: 'image conversion, snippets, engineering'
---

# Mastering HEIC Conversion on Linux: A Quick Guide

As Apple devices continue to gain popularity, handling HEIC (High Efficiency Image Format) files is becoming increasingly common. These files, with the `.HEIC` extension, offer high-quality images in smaller file sizes, but they're not always compatible with all systems. If you're a Linux user looking to convert your HEIC images to a more accessible format like JPG or PNG, you're in the right place.

### Getting Started with HEIC Conversion

To begin converting HEIC files, you'll need to install some tools. The `libheif` library is a great starting point because it offers command-line tools for conversion. You can find the library on [GitHub here](https://github.com/strukturag/libheif.git).

First, install the necessary examples by running:
```bash
sudo apt-get install libheif-examples
```

### Single File Conversion

Once the tools are installed, converting a single HEIC file to JPG or PNG is a breeze. Use the `heif-convert` command:
```bash
heif-convert [original-file-name] [file-name-with-jpg-or-png-extension]
```

For instance, if you have a file named `IMG_1234.HEIC` and want to convert it to JPG, execute:
```bash
heif-convert IMG_1234.HEIC IMG_1234.jpg
```

### Batch Conversion of HEIC Files

If you're dealing with multiple HEIC files, doing this manually for each file can be tedious. Instead, use a simple script to automate the process:
```bash
for file in *.heic; do heif-convert $file ${file/%.heic/.jpg}; done
```

This script will convert every HEIC file in your current directory into a JPG format. Remember, if your files have uppercase `.HEIC` extensions, you might need to modify the script to accommodate these files.

With these steps, converting HEIC images on Linux becomes straightforward, ensuring your images are compatible across all platforms with minimal effort. Enjoy your efficient and seamless file conversions!

For further reading and a variety of methods, check out detailed guides from [Lok's Notes](https://www.lokarithm.com/2021/02/27/linux-how-to-convert-heic-files-to-jpg-or-png/), [Dr.Fone](https://drfone.wondershare.com/iphone-photo/convert-heic-to-jpg-on-linux.html), and others.
