var ping = require ("net-ping");


var options = {
    networkProtocol: ping.NetworkProtocol.IPv4,
    packetSize: 16,
    retries: 1,
    sessionId: (process.pid % 65535),
    timeout: 1000,
    ttl: 128
};

var session = ping.createSession (options);

session.pingHost ('8.8.8.8', function (error, target,sent, recv) {
    var ms = recv - sent;
    if (error)
        console.log (target + ": " + error.toString ());
    else
        console.log (ms + 'ms');
});

session.pingHost ('192.168.1.5', function (error, target,sent, recv) {
    var ms = recv - sent;
    if (error)
        console.log (target + ": " + error.toString ());
    else
        console.log (ms + 'ms');
});

session.pingHost ('8.8.8.27', function (error, target,sent, recv) {
    var ms = recv - sent;
    if (error)
        console.log (target + ": " + error.toString ());
    else
        console.log (ms + 'ms');
});
