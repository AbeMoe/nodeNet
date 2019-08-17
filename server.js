
var tcpp = require('tcp-ping');




tcpp.ping({ address: '172.217.1.142'}, function(err, data) {
    console.log("Ayyy");
    console.log(data);
});
