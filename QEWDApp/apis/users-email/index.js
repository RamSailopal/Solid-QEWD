const fs = require('fs')
var files = fs.readdirSync('/home/soliddb/oidc/users/users-by-email')
    module.exports = function(args, finished) {
      var results = [];
      for ( var file in files)  {
         console.log(files[file])
         var personDoc = this.documentStore.use('usersemail');
         var path = require('path');
         var path1=path.join('/home/soliddb/oidc/users/users-by-email/',files[file]);
         let data = fs.readFileSync(path1, 'UTF-8');
         var test_data = JSON.parse("[" + data + "]");
         var dataDoc = personDoc.$('data');
         if (!personDoc.exists) {
            test_data.forEach(function(record) {
                var id = personDoc.$('next_id').increment();
                dataDoc.$(id).setDocument(record);
                results.push(dataDoc.$(id).getDocument());
            });

         }
      }
      finished(results);
    };

