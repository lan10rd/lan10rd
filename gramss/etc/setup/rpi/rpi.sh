echo "RPI"
echo "..."
echo "/boot/firmware/config.txt"
[pi4]
max_framebuffers=2
hdmi_force_hotplug=1

[all]
kernel=vmlinuz
cmdline=cmdline.txt
initramfs initrd.img followkernel

# Enable the audio output, I2C and SPI interfaces on the GPIO header
dtparam=audio=on
dtparam=i2c_arm=on
dtparam=spi=on

# Enable the KMS ("full" KMS) graphics overlay, and allocate 128Mb to the GPU
# memory. The full KMS overlay is required for X11 application support under
# wayland
dtoverlay=vc4-fkms-v3d
gpu_mem=128

# Uncomment the following to enable the Raspberry Pi camera module firmware.
# Be warned that there *may* be incompatibilities with the "full" KMS overlay
#start_x=1

# Comment out the following line if the edges of the desktop appear outside
# the edges of your display
disable_overscan=1

# If you have issues with audio, you may try uncommenting the following line
# which forces the HDMI output into HDMI mode instead of DVI (which doesn't
# support audio output)
hdmi_drive=2

# If you have a CM4, uncomment the following line to enable the USB2 outputs
# on the IO board (assuming your CM4 is plugged into such a board)
#dtoverlay=dwc2,dr_mode=host

# Config settings specific to arm64
arm_64bit=1
dtoverlay=dwc2

echo "/boot/firmware/cmdline.txt"
dwc_otg.lpm_enable=0 console=tty1 root=LABEL=writable rootfstype=ext4 elevator=deadline rootwait fixrtc quiet splash cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1

#net.ifnames=0 dwc_otg.lpm_enable=0 console=serial0,115200 cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1 console=tty1 root=LABEL=writable rootfstype=ext4 elevator=deadline rootwait fixrtc