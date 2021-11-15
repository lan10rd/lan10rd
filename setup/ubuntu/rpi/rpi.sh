echo "RPI"
echo "..."
echo "/boot/firmware/config.txt"

echo "/boot/firmware/cmdline.txt"
# append, cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1

# dwc_otg.lpm_enable=0 console=tty1 root=LABEL=writable rootfstype=ext4 elevator=deadline rootwait fixrtc quiet splash cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1

#net.ifnames=0 dwc_otg.lpm_enable=0 console=serial0,115200 cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1 console=tty1 root=LABEL=writable rootfstype=ext4 elevator=deadline rootwait fixrtc