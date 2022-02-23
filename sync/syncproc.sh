#!/bin/bash
run() {
        fileres=$(find /home/soliddb/oidc/users/users -type f)
        if [[ "$fileres" != "" ]]
        then 
          cd /home/node
          node index.js
        fi
        sleep 10
        run
}
run
