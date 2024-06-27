# https://github.com/owasp-amass/amass/blob/master/doc/tutorial.md
docker pull caffix/amass
docker run -v OUTPUT_DIR_PATH:/.config/amass/ caffix/amass enum -d example.com

