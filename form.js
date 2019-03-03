$(function () {
    var socket = io();
    $('form').submit(function (e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('selection', $('#m').val());
        $('#m').val('');
        return false;
    });

    socket.on('selection', function (front, back, id) {
        console.log(front)
        console.log(back)
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