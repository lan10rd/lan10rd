Bind9 | Ubuntu
Current Bind9 Docker Image from Canonical, based on Ubuntu. Receives security updates and rolls to newer Bind9 or Ubuntu release. This repository is free to use and exempted from per-user rate limits.

About Bind9
BIND 9 provides software for Domain Name System (DNS) management including both defining domain names authoritatively for a given DNS zone, and recursively resolving domain names to their IP addresses. In addition to BIND 9's DNS server itself, named, this container also includes tools for performing DNS queries and dynamic updates. Read more on the BIND 9 website.

Tags and Architectures
LTS Up to 5 years free security maintenance on LTS channels.

ESM Up to 10 years customer security maintenance from canonical/bind9. Request access.

Tags in italics are not available in ubuntu/bind9 but are shown here for completeness.

Channel Tag			Currently	Architectures
9.18-22.04_beta   	LTS		Bind9 9.18 on Ubuntu 22.04 LTS	amd64, arm64, ppc64el, s390x
9.16-21.10_beta   			Bind9 9.16.15 on Ubuntu 21.10 	amd64, arm64, ppc64el, s390x
9.16-20.04_beta   	LTS		Bind9 9.16.1 on Ubuntu 20.04 LTS	amd64, arm64, ppc64el, s390x
track_risk				
Channel Tag shows the most stable channel for that track ordered stable, candidate, beta, edge. More risky channels are always implicitly available. So if beta is listed, you can also pull edge. If candidate is listed, you can pull beta and edge. When stable is listed, all four are available. Images are guaranteed to progress through the sequence edge, beta, candidate before stable.

Commercial use and Extended Security Maintenance channels
If your usage includes commercial redistribution or requires unavailable channels/versions, please get in touch with the Canonical team (or using rocks@canonical.com).

Usage
Launch this image locally:

docker run -d --name bind9-container -e TZ=UTC -p 30053:53 ubuntu/bind9:9.18-22.04_beta
Access your Bind9 server at localhost:30053

Parameters
Parameter	Description
-e TZ=UTC	Timezone.
-p 30053:53	Expose bind9 on localhost:30053.
-e BIND9_USER=bind	The user which will start the named process.
-v /path/to/bind/configuration:/etc/bind/named.conf	Local configuration file named.conf (try this example).
-v /path/to/cached/data:/var/cache/bind	Location where locally cached data can be dumped.
-v /path/to/resource/records:/var/lib/bind	Location of Resource Records defining various domain information.
Testing/Debugging
To debug the container:

docker logs -f bind9-container
To get an interactive shell:

docker exec -it bind9-container /bin/bash
Deploy with Kubernetes
Works with any Kubernetes; if you don't have one, we recommend you install MicroK8s and microk8s.enable dns storage then snap alias microk8s.kubectl kubectl.

Download bind9-deployment.yml and set containers.bind9.image in bind9-deployment.yml to your chosen channel tag (e.g. ubuntu/bind9:9.18-22.04_beta), then:

kubectl apply -f bind9-deployment.yml
You will now be able to connect to the Bind9 server on localhost:30053`.

Bugs and feature requests
If you find a bug in our image or want to request a specific feature, please file a bug here:

https://bugs.launchpad.net/ubuntu-docker-images/+filebug

Please title the bug "bind9: <issue summary>". Make sure to include the digest of the image you are using, from:

docker images --no-trunc --quiet ubuntu/bind9:<tag>
Deprecated channels & tags
These channels (tags) are not updated anymore. Please upgrade to newer channels, or reach out if you can't upgrade.

Track	Version	EOL	Upgrade Path
track			