import json as js
import os
path = 'D:\OneDrive - 87ouo,Inc\Github\Picture-repo-v1\img\BQB'
def findAllFile(base):
    for root, ds, fs in os.walk(base):
        for f in fs:
            yield f

def main():
    base = './'
    linklist=[]
    for i in findAllFile(base):
        linklist.append('{}: "https://cdn.jsdelivr.net/gh/GamerNoTitle/Picture-repo-v1@master/img/BQB/{}",'.format(i.replace('[','').replace(']',''),i))
    print(linklist)

if __name__ == '__main__':
    main()