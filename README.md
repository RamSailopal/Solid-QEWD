# Solid-QEWD

A proof of concept showing the potential of QEWD as a backend store for solid server

Since solid-server stores data in the file system as JSON files and QEWD stores data in IRIS/YottaDB/Cache/Gtm database globals, this repo shows the cross compatibility potential of both approaches

![Alt text](solid-qewd.webp?raw=true "QEWD with Solid Server")

# Demo

    git clone https://github.com/RamSailopal/Solid-QEWD.git
    cd Solid-QEWD
    docker-compose up
    
Three containers will then be provisioned:

**Solid server** - Access  via https://ipaddressofdockerhost:8443

**QEWD server** - Access via https://ipaddressofdockerhost:8080/qewd-monitor

              Password - **keepThisSecret!**
              
              
**Sync process** - This runs and checks for any changes on the solid server, syncing any Solid  database changes with QEWD. The process runs two REST apis as a results of any changes:


               https://ipaddressofdockerhost:8080/api/users
               
               https://ipaddressofdockerhost:8080/api/users-by-email
               
               The code for these APIs are in the QEWDApp directory (see the QEWD reference for further information about development with QEWD)



References:

QEWD - https://www.qewdjs.com/

Solid-server - https://github.com/solid
