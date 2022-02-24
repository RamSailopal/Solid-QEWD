#!/bin/bash
apt-get install -y python3
ln -s /usr/bin/python3 /usr/bin/python
export ydb_gbldir=/opt/yottadb/yottadb.gld
export ydb_dir=/opt/yottadb
export ydb_rel=r1.30_x86_64
export ydb_routines="/opt/mgweb/m /opt/mgweb/mapped /usr/local/lib/yottadb/r130/libyottadbutil.so"
export ydb_dist=/usr/local/lib/yottadb/r130
service ssh start
cd /usr/local/YottaDB-dashboard/glbview
/usr/local/YottaDB-dashboard/glbview/globview.sh start
/usr/local/bin/dbprov.sh
/usr/local/bin/start.sh
cp /home/entrypoint/_zmgsi1.m /opt/mgweb/m
cp /home/entrypoint/_zmgsis1.m /opt/mgweb/m
ydb <<< "do ylink^%zmgsi1"
ydb <<< "do start^%zmgsi1(0)"
cd /opt/mgweb && /opt/mgweb/start
