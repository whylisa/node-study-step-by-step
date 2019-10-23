var net = require('net')
var chatServer = net.createServer()

chatServer.on('connection',function(client) {
	client.write('hh')
	client.end()
})
chatServer.listen('9000')
