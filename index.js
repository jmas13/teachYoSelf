var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg, user){
    console.log('message: ', msg, user);
    socket.broadcast.emit('chat message', msg, user); //What is the relationship between io and sockets?
    //When above line was io.broadcast.emit errored out with TypeError: Cannot read property 'emit' of undefined
    //Maybe io is the port and the sockets are the individual connections?
  })
  socket.on('disconnect', function(){
    io.emit('disconnection')
    console.log('user disconnected')
  })
})

http.listen(3000, function(){
  console.log('listening on *:3000')
})
