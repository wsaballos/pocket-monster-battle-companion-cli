const axios = require('axios');
const readline = require('readline');
const ailment = require('./ailments.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Which Poketto Monsutā do you want information on? ', (answer) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${answer.toLowerCase()}`)
        .then(function (response) {
            let types = [];
            const typesRequest = response.data.types
            typesRequest.forEach((i) => {
                types.push(i.type.name)
            })
            const index = response.data.id
            const responseMonster = new PocketMonster(index, answer, types);
            responseMonster.info();
        })
        .catch(function (error) {
            console.log(`I think ${answer} is an undiscovered Poketto Monsutā`);
        });
    rl.close();

});



const PocketMonster = function (number, pocketMonsterName, type) {
    this.index = number;
    this.name = pocketMonsterName;
    this.types = type;
    this.info = function () {
        console.log(`
Pocketmonster Name: ${this.name}
Pocketmonster Index: ${this.index}
Pocketmonster Type(s): ${this.types}
Ailment Details:`)
        if (this.index === 6)
            console.log('=====~ RIP RULIS ~======')
        const returnedailments = ailment.ailments(this.types)
        console.table(returnedailments);
        console.table('* Elements not included in table will be base dmg, which is 100%');
    }
}