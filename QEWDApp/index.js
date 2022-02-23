const fs = require('fs')
var files = fs.readdirSync('/home/soliddb/oidc/users/users')
var dbx = require('mg-dbx').dbx;
var db = new dbx();
var open = db.open({ type: "YottaDB", host: "yottadb", tcp_port: 7041, });
var solid = db.mglobal("SOLID");
var solidemail = db.mglobal("SOLIDEMAIL");
for ( var file in files)  {
   var path = require('path');
   var path1=path.join('/home/soliddb/oidc/users/users/',files[file]);
   let data = fs.readFileSync(path1, 'UTF-8');
   var test_data = JSON.parse(data);
   console.log(test_data);
   var result = solid.set(test_data.username, "username", test_data.username);
   var result = solidemail.set(test_data.email, "username", test_data.username);
   var result = solid.set(test_data.username, "webId", test_data.webId);
   var result = solidemail.set(test_data.email, "webId", test_data.webId);
   var result = solid.set(test_data.username, "name", test_data.name);
   var result = solidemail.set(test_data.email, "name", test_data.name);
   var result = solid.set(test_data.username, "email", test_data.email);
   var result = solidemail.set(test_data.email, "email", test_data.email);
   var result = solid.set(test_data.username, "hashedPassword", test_data.hashedPassword);
   var result = solidemail.set(test_data.email, "hashedPassword", test_data.hashedPassword);
}
