var ping = require ("net-ping");

IPs = ['216.58.194.46','40.112.72.205','188.125.72.165']

var options = {
    networkProtocol: ping.NetworkProtocol.IPv4,
    packetSize: 16,
    retries: 1,
    timeout: 1500,
    ttl: 128
};

var session = ping.createSession (options);


async function pingCheck(target)
{
  let promise = new Promise((resolve,reject)=>
  {
    session.pingHost (target,
    function (error, target,sent, recv)
    {
        var ms = recv - sent;
        if (error)
        {
          reject(error);
        }
        else
        {
          resolve(ms);
        }
    })
  })
  return promise
}


for (ip of IPs)
{
  console.log(ip);
  pingCheck(ip)
    .then((resolution)=>
    {
    })
    .catch((error)=>
    {
      if(error.name = 'RequestTimeOutError')
      {
        console.log("time out")
      }
      else
        console.log("Other error");
    });
}
