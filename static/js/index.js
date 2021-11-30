let socket = io('http://localhost:8080/');

let number=0;

$( '.addCount').on('click', function(event){
    socket.emit('add');
});

socket.on('adding', function(data){
    number=number+1;
    $( '.count' ).html( number );
});

$( '.resetCount').on('click', function(event){
    socket.emit('restart');
});

socket.on('reset', function(data){
    number=0;
    $( '.count' ).html( number );
});