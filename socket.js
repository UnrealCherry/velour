
module.exports = function (io) {

    io.on('connection', function(socket){
        console.log('con')
        socket.on('chat message', function(msg){
            io.emit('chat message', msg);
        });
    });








}

