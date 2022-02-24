var https = require('https');
const ttl2jsonld = require('@frogcat/ttl2jsonld').parse;
if (process.argv[2]===undefined) {
   console.log("Please pass the domain name of the Solid server as a parameter");
   process.exit(1);
}
var options = {
    host: process.argv[2],
    path: '/'
}
var request = https.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        var dbx = require('mg-dbx').dbx;
        var db = new dbx();
        var open = db.open({ type: "YottaDB", host: "yottadb", tcp_port: 7042, });
        var solid = db.mglobal("SOLID");
        const jsonld = ttl2jsonld(data);
        const jsonld1=JSON.stringify(jsonld,null,2)
        console.log(jsonld1);
        for (let i in jsonld) {
           if (typeof jsonld[i] === 'object') {
              for (let j in jsonld[i]) { 
                 if (typeof jsonld[i][j] === 'object') {
                    for (let k in jsonld[i][j]) {
                       if (typeof jsonld[i][j][k] === 'object') {
                          for (let m in jsonld[i][j][k]) {
                             if (typeof jsonld[i][j][k][m] === 'object') {
                                for(let n in jsonld[i][j][k][m]) {
                                   solid.set(process.argv[2], i, j ,k , m , n, jsonld[i][j][k][m][n]);
                                }
                             }
                             else {
                                solid.set(process.argv[2], i, j ,k , m , jsonld[i][j][k][m]);
                             }
                          }
                       }
                       else {
                          solid.set(process.argv[2], i, j ,k , jsonld[i][j][k]);
                       }
                    }
                 }
                 else {
                    solid.set(process.argv[2], i, j, jsonld[i][j]);
                 }
              }
           }
           else {
              solid.set(process.argv[2], i, jsonld[i]);
           }
        }
           
    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();
