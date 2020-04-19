import json as js
import os
path = 'D:\OneDrive - 87ouo,Inc\Github\Picture-repo-v1\img\BQB'
def findAllFile(base):
    for root, ds, fs in os.walk(base):
        for f in fs:
            yield f

def main():
    base = './'
    jsonheadlist=[]
    jsonlinklist=[]
    for i in findAllFile(base):
        print('{}: "https://cdn.jsdelivr.net/gh/GamerNoTitle/Picture-repo-v1@master/img/BQB/{}",'.format(i,i))

if __name__ == '__main__':
    main()