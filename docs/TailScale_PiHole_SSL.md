# TailScale PiHole and OpenSSL

I added SSL to my pihole today.

I had a few issues with lighttpd not having the `lighttpd-mod-openssl` package installed.

But after a bit of jiggery pokery with the certificates, everything worked smoothly.

I enabled `tailscale cert` on my raspberrypi (which requires https & magic DNS).

I think tailscale now takes priority as first DNS nameserver, and then refers to the pihole as configured in the management dashboard.

so anyway pihole with https over my tailnet! woo.

I am a little concerned about this page: [configure https tailscale.com](https://tailscale.com/kb/1153/enabling-https#view-certificate-status)

It mentions that I should acknowledge that my machine names and tailnet will be published on a public ledger, so I guess that's fine but just more attack surface for my stuff!

The other downside is that I can only give the cert for a specific domain, rather than have some subject alternative names included in the certificate. but this is fine.


