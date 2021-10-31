#!/usr/bin/python

# python retag.py -s lanl0rd/acme -t lan10rd/acme#!/usr/bin/python

import sys, getopt, os

import build

def all(images, user_source, user_tag, platforms, registry):
    try:
        if (user_source is None):
            usage()
            raise Exception("user_source must be defined")
        if (user_tag is None):
            usage()
            raise Exception("user_tag must be defined")
        for image in images:
            try:
                print(image)
                build.build(user_source + '/' + image, user_tag + '/' + image, platforms, registry)
            except Exception as erro:
                print('all image erro', erro)
    except Exception as err:
        print('all err:' + err)

def main():
    try:
        opts, args = getopt.getopt(sys.argv[1:], "vhd:s:t:r:", ["verbose", "help", "dockerfile=", "source_user=", "tag_user=", "platforms=", "registry="])
    except getopt.GetoptError as err:
        print(err)
        sys.exit(2)

    verbose = False
    platforms = "linux/arm64,linux/amd64"
    tag_source = None
    registry = None
    user_source = None
    user_tag = None

    for o, a in opts:
        if o == "-v":
            verbose = True
        elif o in ("-h", "--help"):
            usage()
            sys.exit()
        elif o in ("-s", "--source_user"):
            user_source = a
        elif o in ("-t", "--tag_user"):
            user_tag = a
        elif o in ("-p", "--platforms"):
            platforms = a
        elif o in ("-r", "--registry"):
            registry = a
        else:
            assert False, "unhandled option"
    all(os.listdir("../../images"), user_source, user_tag, platforms, registry)

def usage():
    print("usage is like:  python all.py -s lanl0rd -t lan10rd")

if __name__ == "__main__":
    main()
    exit()