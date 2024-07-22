#!/bin/sh
# https://www.clamav.net/documents/installing-clamav#debian

if ! command -v lsb_release &> /dev/null; then
    echo "lsb_release command not found."
    exit 1
fi

if [ "$(lsb_release -si)" != "Debian" ]; then
    echo "Operating system is not Debian"
    exit 1
fi

echo "clamav install requires sudo privilledge."

# Install ClamAV
sudo apt-get install -y clamav clamav-daemon

# add user clamav if not already
sudo useradd clamav

# Configure on-access scanning
sudo sed -i 's/^#OnAccessExcludePath \/tmp$/OnAccessExcludePath \/tmp/g' /etc/clamav/clamd.conf
sudo sed -i 's/^#OnAccessIncludePath \/home$/OnAccessIncludePath \/home/g' /etc/clamav/clamd.conf
sudo sed -i 's/^#OnAccessPrevention yes$/OnAccessPrevention yes/g' /etc/clamav/clamd.conf

# create freshclam log files & check for fresh databases
sudo touch /var/log/freshclam.log
sudo chmod 600 /var/log/freshclam.log
sudo chown clamav /var/log/freshclam.log

sudo systemctl stop clamav-freshclam
sudo freshclam
sudo systemctl enable clamav-freshclam

# Restart ClamAV daemon
sudo systemctl restart clamav-daemon
clamscan --version

# Configure OnAccess Scanning
# Local socket is already set in debian
# https://docs.clamav.net/manual/OnAccess.html
sudo echo "
OnAccessPrevention yes
OnAccessIncludePath /home/
OnAccessExcludeUname clamav
" >> /etc/clamav/clamd.conf

# if clamd runs out of inotify watch points
# echo 524288 | sudo tee -a /proc/sys/fs/inotify/max_user_watches