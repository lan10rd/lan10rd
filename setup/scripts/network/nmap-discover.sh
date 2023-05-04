sudo nmap --script broadcast-ping 

sudo nmap --script broadcast-ping --packet-trace 

sudo nmap --script broadcast-ping --script-args broadcast-ping.num_probes=5


# for large networks

sudo nmap --script broadcast-ping --script-args broadcast-ping.timeout=10000