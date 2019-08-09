$(function () {
    var socket = io();

    socket.emit('load');
    socket.on('load', function (numberOfConnections, id, listOfPokemon) {
        let user = socket.id === id;

        if (numberOfConnections === 1) {
            console.log('Waiting for a trainer to connect')
        } else {
            if (!user) {
                console.log('A trainer has connected')
            } else {
                console.log('A trainer is in the chat, and ready to battle.')
            }
        }
    })

    $('form').submit(function (e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('selection', $('#m').val());
        $('#m').val('');
        return false;
    });

    socket.on('selection', function (front, back, id) {
        let imageToUse,
            alignment,
            user = socket.id === id;


        user ?
            (
                imageToUse = front,
                alignment = 'left',
                $('#messages').append($('<li>').append($('<img>').attr({ src: imageToUse, style: `float: ${alignment}` })))
            )
            :
            (
                imageToUse = back,
                alignment = 'right',
                $('#messages').prepend($('<li>').append($('<img>').attr({ src: imageToUse, style: `float: ${alignment}` })))
            )

    });
});