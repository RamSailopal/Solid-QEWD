# Solid-YottaDB

A proof of concepr showing the potential of YottaDB as a backend store for solid server
JSON
Since solid-server stores data in the file system as JSON files . The key/value nature of both JSON and YottaDB brings synergies this repo shows the cross compatibility potential of both approaches

A public Solid service set of pod data is referenced to and then the truple representation of the pod converted to JSON-LD before being stored in YottaDB.

Public Solid service pod example: https://rsailopal.inrupt.net

 # Gitpod Demo
 
1) Create a free/paid Gitpod account - https://www.gitpod.io/
2) Log into the account
3) Open a new browser tab and add **gitpod.io/#https://github.com/RamSailopal/Solid-QEWD/tree/noqewd** to the address - This will create a new Gitpod cloud instance and display three terminal windows. The second will be a YottaDB environment and then third a nodejs environment. Wait for a prompt to appear in the third window and then run:

       node turtparse.js rsailopal.inrupt.net
    
This will parse rest api data returned as turtle syntax into JSON-ld and then store the data in YottaDB. 

4) In the second window a global listing will show the entries in a global **SOLID**

        YDB>D ^%G

        Output device: <terminal>: 

        List ^SOLID
     
        ^SOLID("rsailopal.inrupt.net","@context",0)="/#"
     
        ^SOLID("rsailopal.inrupt.net","@context","Test")="/Test/"
     
        ^SOLID("rsailopal.inrupt.net","@context","c")="/profile/card#"
     
        ^SOLID("rsailopal.inrupt.net","@context","dct")="http://purl.org/dc/terms/"
     

5) This global is data is then presented as REST API endpoint, presenting the data as JSON-ld. This can be seen by navigating to:

   https://8080-gitpod-workspace-address/api/jsonld/rsailopal.inrupt.net
   
   e.g.:
   
   https://8080-ramsailopal-solidqewd-jm0c6kdhurr.ws-eu33.gitpod.io/api/jsonld/rsailopal.inrupt.net
   
   Replace **ramsailopal-solidqewd-jm0c6kdhurr.ws-eu33.gitpod.io** for the address of the gitpod workspace you are running.


# References:

YottaDB - https://yottadb.com/

Solid-server - https://github.com/solid
