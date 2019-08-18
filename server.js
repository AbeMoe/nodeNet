const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var ping = require('ping');


var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];



hosts.forEach(function (host) {
    // WARNING: -i 2 argument may not work in other platform like window
    ping.promise.probe(host, {
        timeout: 1000,
    }).then(function (res) {
        console.log(res);
    });
});
/*



var options = {
    networkProtocol: ping.NetworkProtocol.IPv4,
    packetSize: 16,
    retries: 1,
    sessionId: (process.pid % 65535),
    timeout: 5000,
    ttl: 128
};




const IPs = ['1.1.1.1','40.112.72.205','185.11.125.117','216.58.194.46', '1.2.3.4']





async function pingCheck(target)
{
  let session = ping.createSession (options);
  let promise = new Promise((resolve,reject)=>
  {
    session.pingHost (target,
    async function (error, target,sent, recv)
    {
        var ms = recv - sent;
        if (error)
        {
          reject(error);
        }
        else
        {
          resolve(ms + ' ' + target);
        }
    })
  })
  return promise;
}




for (ip of IPs)
{
  pingCheck(ip)
    .then(async (resolution)=>
    {
      console.log(resolution);
    })
    .catch(async (error)=>
    {
      if(error.name == 'RequestTimeOutError')
      {
        console.log(error,ip)
      }
      else
        console.log("Other error", error )
    });
}

*/
