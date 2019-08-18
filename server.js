const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var ping = require('ping');


var hosts = ['192.168.1.1', 'google.com', 'yahoo.com','taco'];



hosts.forEach(function (host) {
    // WARNING: -i 2 argument may not work in other platform like window
    ping.promise.probe(host,{timeout: 5})
    .then(function (res) {
      if(res.alive)
      {
        console.log(res.avg);
      }
      else
      {
        console.log("He's dead jim!")
      }
    })
    .catch((err)=>
    {
      console.log(err)
    });
});



io.on('connection', function (socket) {

  //Dynamically create a bucnch of sockets that listen
  for(host of hosts)
  {
    socket.on(host, function (from, msg) {
      console.log('I received a private message by ', from, ' saying ', msg);
    });
  }

});
