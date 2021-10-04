$ while true; do ~/bin/mycustomscript.sh; sleep 60; done &

Now, if you have to execute some thing similar quite often, it can get quite wordy to type it out every time. It is quite easy to create a simple shell script to do this and accept the command as an argument. A rudimentary script that will do the above task…

Create a script file called myc.sh (eg. short for “my cron”). You can call it anything you want. And put the following code in the file. Remember to make the script executable as well.

#!/bin/bash
if [ $# -eq 0 ]
then
echo "Usage: myc.sh [command] [output file] [seconds]"
exit 0;
fi
while true; do $1 >> $2; sleep $3; done

Now, you can execute this script easily from command line with different parameters such as:

$ myc.sh who output.txt 30
$ myc.sh /home/tom/bin/script.sh ~/temp/output.txt 60

You can modify the script to include additional checks for the input para