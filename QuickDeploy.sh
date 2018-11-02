#!/bin/bash
wget https://nodejs.org/dist/v9.3.0/node-v9.3.0-linux-x64.tar.xz
xz -d node-v9.3.0-linux-x64.tar.xz
tar -xf node-v9.3.0-linux-x64.tar
ln -s ~/node-v9.3.0-linux-x64/bin/node /usr/bin/node
ln -s ~/node-v9.3.0-linux-x64/bin/npm /usr/bin/npm
npm install pm2 -g 
cd /root/node-v9.3.0-linux-x64/lib/node_modules/pm2/bin/
ln -s /root/node-v9.3.0-linux-x64/lib/node_modules/pm2/bin/pm2 /usr/bin/pm2
cd ~
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.3.tgz
tar -xvzf mongodb-linux-x86_64-4.0.3.tgz
mv mongodb-linux-x86_64-4.0.3 /usr/mongodb
ln -s/usr/mongodb/bin/mongo /usr/bin/mongo
cd /usr/mongodb/
touch log.txt
mkdir data 
cd data 
mkdir db
cd /usr/mongodb/bin/
/usr/mongodb/data/db/mongod --dbpath=/usr/mongodb/data/db/  --fork --logpath=/usr/mongodb/logs.txt
cd /etc/rc.d/
vi rc.local

