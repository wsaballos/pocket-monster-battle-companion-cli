$(function () {
    var socket = io();

    socket.emit('load');
    socket.on('load', function (numberOfConnections, id, listOfPokemon) {
        let user = socket.id === id;
        let pokemonRow = document.getElementById("list-of-pokemon");

        if (numberOfConnections === 1) {
            console.log('Waiting for a trainer to connect')
        } else {
            if (!user) {
                console.log('A trainer has connected')
            } else {
                console.log('A trainer is in the chat, and ready to battle.')
            }
        }
        console.log(listOfPokemon)
    // for loop for list of pokemon
    for (var pokemonIndex = 0; pokemonIndex < 150; pokemonIndex++) {
        let pokemonName = listOfPokemon[pokemonIndex].name;

        pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

        if (pokemonName.slice(pokemonName.length - 2, pokemonName.length) === '-m') {
            pokemonName = pokemonName.slice(0, pokemonName.length - 2) + ' male'; 
        } else if (pokemonName.slice(pokemonName.length - 2, pokemonName.length) === '-f') {
            pokemonName = pokemonName.slice(0, pokemonName.length - 2) + ' female';
        }

        pokemonRow.innerHTML += `<tr>
                                    <th scope="row">${pokemonIndex + 1}</th>
                                    <td>${pokemonName}</td>
                                </tr>`;
        listOfPokemon[pokemonIndex];    
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