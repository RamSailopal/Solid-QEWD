#!/bin/bash
run() {
        fileres=$(find /home/soliddb/oidc/users/users -type f)
        if [[ "$fileres" != "" ]]
        then 
	  curl http://qewd:8080/api/users
          curl http://qewd:8080/api/users-by-email
        fi
        sleep 10
        run
}
run
