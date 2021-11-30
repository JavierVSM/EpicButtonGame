const express = require('express');
const app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function (req, response){
    response.render('index');
})

const server = app.listen(8080);
const io = require('socket.io')(server);

io.on('connection', function (socket) {

    socket.on ('add', function(data){
        io.sockets.emit( 'adding', data )
    });

    socket.on ('restart', function(data){
        io.sockets.emit( 'reset', data )
    });

});