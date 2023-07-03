import json
import os
import subprocess
import platform

def save():
    ls_cmd = run(['docker', 'image', 'ls', '--format', '"{{json .}}}"'], False)
    for x in ls_cmd.stdout.splitlines():
        try:
            image = json.loads(x[1:][:-1])
            image_tag_str = image['Repository'] + ':' + image['Tag']
            image_tag_filename = '__'.join(('_'.join(image_tag_str.split('/'))).split(':'))
            # platform.uname()[4] # x86_64 # aarch64
            save_cmd_str = 'docker save ' + image_tag_str + ' | gzip > ' + image_tag_filename + '.tar.gz'
            print('saving', image_tag_str)
            save_cmd = os.system(save_cmd_str)
        except Exception as e:
            print('save e', e)

def run():
    cmd_splits = cmd
    if (auto_split):
        cmd_splits = cmd.split(' ')
    return subprocess.run(cmd_splits, stdout=subprocess.PIPE, text=True)

if __name__ == '__main__':
    save()