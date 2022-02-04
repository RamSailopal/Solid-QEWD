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

Although the database changes in Solid are synced with QEWD through a separate process in this demonstation, there is significant potential to write data directly to QEWD from Solid.

# Process

1) Access the Solid Server prototype UI and then **Register to get a new pod**, filling out and saving the details.

2) Navigate to the Qewd monitor and then access **Document Store**. 
 
3) You should see two new documents **users** and **users-by-email** holding the Solid Server registration data.



# References:

QEWD - https://www.qewdjs.com/

Solid-server - https://solidproject.org/
