const axios = require('axios');
const browserSync = require('browser-sync');
var express = require("express");
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 8080;

// express setup for static files
app.use('/', express.static('dest/styles/'));



app.get('/form.js', function (req, res) {
    res.sendFile(__dirname + '/form.js');
});

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: '.' });
});

let connections = 0;
io.on('connection', function (socket) {
    const id = socket.id;
    connections++;
    socket.on('load', function () {
        console.log(connections.date)
        axios.get('https://pokeapi.co/api/v2/pokemon/', {
            params: {
                limit: '151'
            }
        })
        .then(function (response) {
            io.emit('load', connections, id, response.data.results);
        })
    })

    socket.on('disconnect', function () {
        connections--;
        // io.emit('load', socket.id);
    });

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
            io.emit('selection', back, front, id);
            this.info = function () {
                return this.types;
            }

        }

    });
});

http.listen(port, function () {
    console.log('listening');
    browserSync({
        files: ['**/*.{html,js,css}'],
        ignore: 'node_modules',
        logLevel: 'debug',
        reloadDelay:  10,
        online: false,
        open: false,
        port: port + 1,
        proxy: 'localhost:' + port,
        ui: false
    });
});
