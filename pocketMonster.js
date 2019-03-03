const axios = require('axios');
const terminalImage = require('terminal-image');
const got = require('got');
const ailment = require('./ailments.js');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/form.js', function (req, res) {
    res.sendFile(__dirname + '/form.js');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected:', socket.id);
    socket.on('selection', function (msg, user) {
        console.log(user === socket.id)
        msg = msg.replace(/\s+/g, '-');
        msg = msg.replace(/\.|\'/g, '');
        axios.get(`https://pokeapi.co/api/v2/pokemon/${msg.toLowerCase()}`)
            .then(function (response) {
                let types = [];
                const typesRequest = response.data.types
                typesRequest.forEach((i) => {
                    types.push(i.type.name)
                })
                const index = response.data.id
                const front = response.data.sprites.front_default
                const back = response.data.sprites.back_default
                const id = socket.id
                const responseMonster = new PocketMonster(index, msg, types, front, back, id);

                console.log(imgToUse, socket.id)
                responseMonster.info();
            })
            .catch(function (error) {
                console.log(`I think ${msg} is an undiscovered Poketto Monsutā`);
            });
        const PocketMonster = function (indexOfPocketMonster, pocketMonsterName, type, front, back, id) {
            this.indexOfPocketMonster = indexOfPocketMonster;
            this.name = pocketMonsterName;
            this.types = type;
            (async () => {
                const { body } = await got(front, { encoding: null });
                this.front = await terminalImage.buffer(body)
                io.emit('selection', back, front, id);
            })();

            this.info = function () {
                return this.types;
            }

        }

    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

http.listen(3000, function () {
    console.log('listen');
});
