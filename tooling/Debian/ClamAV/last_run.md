# ClamAV Debian 12

[ClamDocs](https://docs.clamav.net/manual/Installing.html#installing-with-a-package-manager)

This installation omits clamav-milter (the mailer daemon)

## Created configuration files:
/etc/clamav/
- clamd.conf
- freshclam.conf
- onerrorexecute.d  
- onupdateexecute.d
- virusevent.d

/usr/share/doc/clam
- clamav
- clamav-base/      
- clamav-daemon/    
- clamav-freshclam/ 
- clamdscan/

Ran Script, output appended at bottom.

Tried to run `sudo freshclam`

but got:
```
ERROR: /var/log/clamav/freshclam.log is locked by another process
ERROR: Problem with internal logger (UpdateLogFile = /var/log/clamav/freshclam.log).
ERROR: initialize: libfreshclam init failed.
ERROR: Initialization error!
```

most likely because of the clash with the following processes:

## Processes:
```
UID          PID    PPID  C    SZ   RSS PSR STIME TTY          TIME CMD
clamav      6230       1  0 22187 17176   7 23:33 ?        00:00:00 /usr/bin/freshclam -d --foreground=true
clamav      6241       1  7 375787 1329256 6 23:33 ?       00:00:17 /usr/sbin/clamd --foreground=true
```

for the [solution](https://askubuntu.com/questions/909273/clamav-error-var-log-clamav-freshclam-log-is-locked-by-another-process) run `sudo systemctl stop clamav-freshclam.service`; `freshclam` can be run and verified manually.

---

## Script output:
```
[sudo] password for frigne: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
clamav is already the newest version (1.0.3+dfsg-1~deb12u1).
Suggested packages:
  libclamunrar clamav-docs daemon
The following NEW packages will be installed:
  clamav-daemon clamdscan
0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 267 kB of archives.
After this operation, 1,252 kB of additional disk space will be used.
Get:1 http://deb.debian.org/debian bookworm/main amd64 clamav-daemon amd64 1.0.3+dfsg-1~deb12u1 [211 kB]
Get:2 http://deb.debian.org/debian bookworm/main amd64 clamdscan amd64 1.0.3+dfsg-1~deb12u1 [56.6 kB]
Fetched 267 kB in 1s (249 kB/s)     
Preconfiguring packages ...
Selecting previously unselected package clamav-daemon.
(Reading database ... 126534 files and directories currently installed.)
Preparing to unpack .../clamav-daemon_1.0.3+dfsg-1~deb12u1_amd64.deb ...
Unpacking clamav-daemon (1.0.3+dfsg-1~deb12u1) ...
Selecting previously unselected package clamdscan.
Preparing to unpack .../clamdscan_1.0.3+dfsg-1~deb12u1_amd64.deb ...
Unpacking clamdscan (1.0.3+dfsg-1~deb12u1) ...
Setting up clamdscan (1.0.3+dfsg-1~deb12u1) ...
Setting up clamav-daemon (1.0.3+dfsg-1~deb12u1) ...
Created symlink /etc/systemd/system/multi-user.target.wants/clamav-daemon.service → /lib/systemd/system/clamav-daemon.service.
Created symlink /etc/systemd/system/sockets.target.wants/clamav-daemon.socket → /lib/systemd/system/clamav-daemon.socket.
Processing triggers for man-db (2.11.2-2) ...
./clamav.sh: line 7: useradd: command not found
Thu Mar 21 23:32:51 2024 -> ClamAV update process started at Thu Mar 21 23:32:51 2024
Thu Mar 21 23:32:51 2024 -> daily database available for update (local version: 27220, remote version: 27221)
Current database is 1 version behind.
Downloading database patch # 27221...
Time:    0.2s, ETA:    0.0s [========================>]   18.60KiB/18.60KiB
Thu Mar 21 23:32:52 2024 -> Testing database: '/var/lib/clamav/tmp.1c37d2cd3d/clamav-b2d2bb84232c8c99d3c55f7402577a66.tmp-daily.cld' ...
Thu Mar 21 23:32:58 2024 -> Database test passed.
Thu Mar 21 23:32:58 2024 -> daily.cld updated (version: 27221, sigs: 2055962, f-level: 90, builder: raynman)
Thu Mar 21 23:32:58 2024 -> main.cvd database is up-to-date (version: 62, sigs: 6647427, f-level: 90, builder: sigmgr)
Thu Mar 21 23:32:58 2024 -> bytecode.cvd database is up-to-date (version: 335, sigs: 86, f-level: 90, builder: raynman)
Thu Mar 21 23:33:08 2024 -> Clamd successfully notified about the update.
Synchronizing state of clamav-freshclam.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable clamav-freshclam
Created symlink /etc/systemd/system/multi-user.target.wants/clamav-freshclam.service → /lib/systemd/system/clamav-freshclam.service.
ClamAV 1.0.3/27221/Thu Mar 21 16:25:36 2024
```
