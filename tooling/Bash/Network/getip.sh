#!/bin/bash

echo -e "dig myip.opendns.com:"
dig +short myip.opendns.com @resolver1.opendns.com | \
	grep -E "[^^][0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}"
echo -e "\n"

echo -e "dig o-o.myaddr.l.google.com:"
dig TXT +short o-o.myaddr.l.google.com @ns1.google.com | \
	grep -E "[^^][0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}"
echo -e "\n"

echo -e "dig whoami.cloudflare:"
dig +short txt ch whoami.cloudflare @1.0.0.1 | \
	grep -E "[^^][0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}"
echo -e "\n"

#echo -e "dig o-o.myaddr.l.google.com: \n"
#dig -6 TXT +short o-o.myaddr.l.google.com @ns1.google.com | \
#	grep -E "[^^][0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}"

#echo -e "host myip.opendns.com:\n"
#host myip.opendns.com resolver1.opendns.com | \
#	grep -E "[^^][0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}"

echo -e "dig o-o.myaddr.l.google.com @ns1.google.com:"
dig TXT +short o-o.myaddr.l.google.com @ns1.google.com | awk -F'"' '{ print $2}' | \
	grep -E "[^^][0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}"
echo -e "\n"

# https://www.cyberciti.biz
