BuildKit
BuildKit is a concurrent, cache-efficient, and Dockerfile-agnostic builder toolkit.

Report issues at https://github.com/moby/buildkit

Join #buildkit channel on Docker Community Slack

Tags
Latest stable release
v0.9.1, latest

v0.9.1-rootless, rootless (see docs/rootless.md for usage)

Development build from master branch
master

master-rootless

Binary releases and changelog can be found from https://github.com/moby/buildkit/releases

Usage
To run daemon in a container:

docker run -d --name buildkitd --privileged moby/buildkit:latest
export BUILDKIT_HOST=docker-container://buildkitd
buildctl build --help
See https://github.com/moby/buildkit#buildkit for general BuildKit usage instructions

Docker Buildx
Buildx uses the latest stable image by default. To set a custom BuildKit image version use --driver-opt:

docker buildx create --driver-opt image=moby/buildkit:master --use
Rootless
For Rootless deployments, see docs/rootless.md

Kubernetes
For Kubernetes deployments, see examples/kubernetes

Daemonless
To run the client and an ephemeral daemon in a single container ("daemonless mode"):

docker run \
    -it \
    --rm \
    --privileged \
    -v /path/to/dir:/tmp/work \
    --entrypoint buildctl-daemonless.sh \
    moby/buildkit:master \
        build \
        --frontend dockerfile.v0 \
        --local context=/tmp/work \
        --local dockerfile=/tmp/work
Rootless mode:

docker run \
    -it \
    --rm \
    --security-opt seccomp=unconfined \
    --security-opt apparmor=unconfined \
    -e BUILDKITD_FLAGS=--oci-worker-no-process-sandbox \
    -v /path/to/dir:/tmp/work \
    --entrypoint buildctl-daemonless.sh \
    moby/buildkit:master-rootless \
        build \
        --frontend \
        dockerfile.v0 \
        --local context=/tmp/work \
        --local dockerfile=/tmp/work