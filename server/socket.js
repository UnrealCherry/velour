
module.exports = function (io) {

    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
        socket.on('receive _client_chat_data',function (e) {
            io.sockets.emit('receive _server_chat_data',e);
        })

    });






}

