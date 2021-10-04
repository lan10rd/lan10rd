#!/usr/bin/python

import sys, getopt, os

def build(source, tag, platforms, registry):
    try:
        if (tag is None):
            raise Exception("-t, --tag : tag is required, something like dockeruser/imagename:latest")
        if (source is None):
            raise Exception("-s, --source : source is required, something like lanl0rd/js:latest")

        cmd = """docker buildx build --platform """ + platforms + """ --rm --push --compress -t """ + tag + """ - <<EOF
FROM --platform=$TARGETPLATFORM """ + source + """ AS build
ARG TARGETPLATFORM
ARG BUILDPLATFORM
EOF"""
    
        print(cmd)
        os.system(cmd)
        return True
    except Exception as err:
        print('build err', err)
        sys.exit(2)

def main():
    try:
        opts, args = getopt.getopt(sys.argv[1:], "vhd:s:t:r:", ["verbose", "help", "dockerfile=", "source=", "tag=", "platforms=", "registry="])
    except getopt.GetoptError as err:
        print(err)
        sys.exit(2)
    platforms = "linux/arm64,linux/amd64"
    source = None
    dockerfile = "./Dockerfile"
    tag = None
    verbose = False
    registry = None
    for o, a in opts:
        if o == "-v":
            verbose = True
        elif o in ("-h", "--help"):
            usage()
            sys.exit()
        elif o in ("-d", "--dockerfile"):
            source = a
        elif o in ("-s", "--source"):
            source = a
        elif o in ("-t", "--tag"):
            tag = a
        elif o in ("-p", "--platforms"):
            platforms = a
        elif o in ("-r", "--registry"):
            registry = a
        else:
            assert False, "unhandled option"
    build(source, tag, platforms, registry)

def usage():
    print("usage is like:")

if __name__ == "__main__":
    main()
    exit()