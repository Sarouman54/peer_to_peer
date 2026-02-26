const peer = new Peer();

peer.on('open', function (id) {
	console.log('My peer ID is: ' + id);
});

var conn = peer.connect('dest-peer-id');

peer.on('connection', function(conn) {
	console.log('Connected to: ' + conn.peer);
});

conn.on('open', function () {
	// Receive messages
	conn.on('data', function (data) {
		console.log('Received', data);
	});

	// Send messages
	conn.send('Hello!');
});