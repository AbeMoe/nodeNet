const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var ping = require('ping');


var hosts = ['192.168.1.1', 'google.com', 'yahoo.com','taco'];



hosts.forEach(function (host) {
    // WARNING: -i 2 argument may not work in other platform like window

});



io.on('connection', function (socket)
{
  socket.emit('getData', {shit:'fuck'})

  socket.on('requestUpdate', (data) =>
  {
    console.log();
    ping.promise.probe(data.val,{timeout: 5})
    .then(function (res) {
      if(res.alive)
      {
        console.log(res)
        socket.emit('updateRecieved',{val: res.avg});
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
  for(host of hosts)
  {
    socket.on(host, function (from, msg)
    {
      console.log('I received a private message by ', from, ' saying ', msg);
    });
  }


});


server.listen(3000);
