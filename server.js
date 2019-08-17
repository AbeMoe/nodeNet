
var tcpp = require('tcp-ping');




tcpp.probe('192.168.2.1',7, (err,data) => {
    if(err)
    {
      console.log()
    }
    console.log("Ayyy");
    console.log(data);
});
