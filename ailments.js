exports.ailments = function (pocketMonsterType) {

    const noEffectVal = 0;
    const notVeryEffectiveVal = 50;
    const normalVal = 100;
    const superEffectiveVal = 200;
    const valueCalculation = (input, efficiency) => input *= efficiency / 100;

    let types = {
        'Normal': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Fighting': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Flying': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Poison': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Ground': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Rock': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Bug': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Ghost': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Steel': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Fire': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Water': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Grass': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Electric': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Psychic': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Ice': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Dragon': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Dark': {
            'Damage To': normalVal,
            'Damage From': normalVal
        },
        'Fairy': {
            'Damage To': normalVal,
            'Damage From': normalVal
        }
    }

    pocketMonsterType.forEach(type => {
        switch (type) {
            case 'normal':
                // dmg
                types['Rock']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Ghost']['Damage To'] *= noEffectVal / 100;
                types['Steel']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Fighting']['Damage From'] *= superEffectiveVal / 100;
                types['Ghost']['Damage From'] *= noEffectVal / 100;
                break;
            case 'fighting':
                // dmg
                types['Normal']['Damage To'] *= superEffectiveVal / 100;
                types['Ice']['Damage To'] *= superEffectiveVal / 100;
                types['Poison']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Flying']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Psychic']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Bug']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Rock']['Damage To'] *= superEffectiveVal / 100;
                types['Ghost']['Damage To'] *= noEffectVal / 100;
                types['Dark']['Damage To'] *= superEffectiveVal / 100;
                types['Steel']['Damage To'] *= superEffectiveVal / 100;
                types['Fairy']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Normal']['Damage From'] *= superEffectiveVal / 100;
                types['Psychic']['Damage From'] *= superEffectiveVal / 100;
                types['Bug']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Rock']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Dark']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Fairy']['Damage From'] *= superEffectiveVal / 100;
                break;
            case 'fire':
                //dmg
                types['Fire']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Water']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Grass']['Damage To'] *= superEffectiveVal / 100;
                types['Ice']['Damage To'] *= superEffectiveVal / 100;
                types['Bug']['Damage To'] *= superEffectiveVal / 100;
                types['Rock']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Dragon']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Steel']['Damage To'] *= superEffectiveVal / 100;
                //defs
                types['Fire']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Water']['Damage From'] *= superEffectiveVal / 100;
                types['Grass']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ice']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ground']['Damage From'] *= superEffectiveVal / 100;
                types['Bug']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Rock']['Damage From'] *= superEffectiveVal / 100;
                types['Steel']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Fairy']['Damage From'] *= notVeryEffectiveVal / 100;
                break;
            case 'water':
                //dmg
                types['Fire']['Damage To'] *= superEffectiveVal / 100;
                types['Water']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Grass']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Ground']['Damage To'] *= superEffectiveVal / 100;
                types['Rock']['Damage To'] *= superEffectiveVal / 100;
                types['Dragon']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Fire']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Water']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Electric']['Damage From'] *= superEffectiveVal / 100;
                types['Grass']['Damage From'] *= superEffectiveVal / 100;
                types['Ice']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Steel']['Damage From'] *= notVeryEffectiveVal / 100;
                break;
            case 'electric':
                // dmg
                types['Water']['Damage To'] *= superEffectiveVal / 100;
                types['Electric']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Grass']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Ground']['Damage To'] *= noEffectVal / 100;
                types['Flying']['Damage To'] *= superEffectiveVal / 100;
                types['Bug']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Dragon']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Electric']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Grass']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ground']['Damage From'] *= superEffectiveVal / 100;
                types['Flying']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Steel']['Damage From'] *= notVeryEffectiveVal / 100;
                break;
            case 'Grass':
                // dmg
                types['Fire']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Water']['Damage To'] *= superEffectiveVal / 100;
                types['Grass']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Poison']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Ground']['Damage To'] *= superEffectiveVal / 100;
                types['Flying']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Bug']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Rock']['Damage To'] *= superEffectiveVal / 100;
                types['Dragon']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Steel']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Fire']['Damage From'] *= superEffectiveVal / 100;
                types['Water']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Electric']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Grass']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ice']['Damage From'] *= superEffectiveVal / 100;
                types['Poison']['Damage From'] *= superEffectiveVal / 100;
                types['Ground']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Flying']['Damage From'] *= superEffectiveVal / 100;
                types['Bug']['Damage From'] *= superEffectiveVal / 100;
                break;
            case 'ice':
                // dmg
                types['Fire']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Water']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Grass']['Damage To'] *= superEffectiveVal / 100;
                types['Ice']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Ground']['Damage To'] *= superEffectiveVal / 100;
                types['Flying']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Dragon']['Damage To'] *= superEffectiveVal / 100;
                types['Steel']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Fire']['Damage From'] *= superEffectiveVal / 100;
                types['Ice']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Flying']['Damage From'] *= superEffectiveVal / 100;
                types['Rock']['Damage From'] *= superEffectiveVal / 100;
                types['Steel']['Damage From'] *= superEffectiveVal / 100;
                break;
            case 'fighting':
                // dmg
                types['Normal']['Damage To'] *= superEffectiveVal / 100;
                types['Ice']['Damage To'] *= superEffectiveVal / 100;
                types['Poison']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Flying']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Psychic']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Bug']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Rock']['Damage To'] *= superEffectiveVal / 100;
                types['Ghost']['Damage To'] *= noEffectVal / 100;
                types['Dark']['Damage To'] *= superEffectiveVal / 100;
                types['Steel']['Damage To'] *= superEffectiveVal / 100;
                types['Fairy']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Flying']['Damage From'] *= superEffectiveVal / 100;
                types['Psychic']['Damage From'] *= superEffectiveVal / 100;
                types['Bug']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Rock']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Dark']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Fairy']['Damage From'] *= superEffectiveVal / 100;
                break;
            case 'poison':
                // dmg
                types['Grass']['Damage To'] *= superEffectiveVal / 100;
                types['Poison']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Ground']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Rock']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Ghost']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Steel']['Damage To'] *= noEffectVal / 100;
                types['Fairy']['Damage To'] *= superEffectiveVal / 100;
                // defs
                types['Grass']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Fighting']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Poison']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ground']['Damage From'] *= superEffectiveVal / 100;
                types['Psychic']['Damage From'] *= superEffectiveVal / 100;
                types['Bug']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Fairy']['Damage From'] *= notVeryEffectiveVal / 100;
                break;
            case 'ground':
                // dmg
                types['Fire']['Damage To'] *= superEffectiveVal / 100;
                types['Electric']['Damage To'] *= superEffectiveVal / 100;
                types['Grass']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Poison']['Damage To'] *= superEffectiveVal / 100;
                types['Flying']['Damage To'] *= noEffectVal / 100;
                types['Bug']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Rock']['Damage To'] *= superEffectiveVal / 100;
                types['Steel']['Damage To'] *= superEffectiveVal / 100;
                // defs
                types['Water']['Damage From'] *= superEffectiveVal / 100;
                types['Electric']['Damage From'] *= noEffectVal / 100;
                types['Grass']['Damage From'] *= superEffectiveVal / 100;
                types['Ice']['Damage From'] *= superEffectiveVal / 100;
                types['Poison']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Rock']['Damage From'] *= notVeryEffectiveVal / 100;
                break;
            case 'flying':
                // dmg
                types['Electric']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Grass']['Damage To'] *= superEffectiveVal / 100;
                types['Fighting']['Damage To'] *= superEffectiveVal / 100;
                types['Bug']['Damage To'] *= superEffectiveVal / 100;
                types['Rock']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Steel']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Electric']['Damage From'] *= superEffectiveVal / 100;
                types['Grass']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ice']['Damage From'] *= superEffectiveVal / 100;
                types['Fighting']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ground']['Damage From'] *= noEffectVal / 100;
                types['Bug']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Rock']['Damage From'] *= superEffectiveVal / 100;
                break;
            case 'psychic':
                // dmg
                types['Fighting']['Damage To'] *= superEffectiveVal / 100;
                types['Poison']['Damage To'] *= superEffectiveVal / 100;
                types['Psychic']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Dark']['Damage To'] *= noEffectVal / 100;
                types['Steel']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Fighting']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Psychic']['Damage From'] *= noEffectVal / 100;
                types['Bug']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ghost']['Damage From'] *= superEffectiveVal / 100;
                types['Dark']['Damage From'] *= superEffectiveVal / 100;
                break;
            case 'bug':
                // dmg
                types['Fire']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Grass']['Damage To'] *= superEffectiveVal / 100;
                types['Fighting']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Poison']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Flying']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Psychic']['Damage To'] *= superEffectiveVal / 100;
                types['Ghost']['Damage To'] *= noEffectVal / 100;
                types['Dark']['Damage To'] *= superEffectiveVal / 100;
                types['Steel']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Fairy']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Fire']['Damage From'] *= superEffectiveVal / 100;
                types['Grass']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Fighting']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ground']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Flying']['Damage From'] *= superEffectiveVal / 100;
                types['Rock']['Damage From'] *= superEffectiveVal / 100;
                break;
            case 'rock':
                // dmg
                types['Fire']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Ice']['Damage To'] *= superEffectiveVal / 100;
                types['Fighting']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Ground']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Flying']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Bug']['Damage To'] *= superEffectiveVal / 100;
                types['Steel']['Damage To'] *= noEffectVal / 100;
                // defs
                types['Normal']['Damage From'] *= superEffectiveVal / 100;
                types['Fire']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Water']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Grass']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Fighting']['Damage From'] *= superEffectiveVal / 100;
                types['Poison']['Damage From'] *= superEffectiveVal / 100;
                types['Ground']['Damage From'] *= superEffectiveVal / 100;
                types['Flying']['Damage From'] *= superEffectiveVal / 100;
                types['Steel']['Damage From'] *= superEffectiveVal / 100;
                break;
            case 'ghost':
                // dmg
                types['Normal']['Damage To'] *= noEffectVal / 100;
                types['Psychic']['Damage To'] *= superEffectiveVal / 100;
                types['Ghost']['Damage To'] *= superEffectiveVal / 100;
                types['Dragon']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Normal']['Damage From'] *= noEffectVal / 100;
                types['Fighting']['Damage From'] *= noEffectVal / 100;
                types['Poison']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Bug']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ghost']['Damage From'] *= superEffectiveVal / 100;
                types['Dark']['Damage From'] *= superEffectiveVal / 100;
                break;
            case 'dragon':
                // dmg
                types['Dragon']['Damage To'] *= superEffectiveVal / 100;
                types['Steel']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Fairy']['Damage To'] *= noEffectVal / 100;
                // defs
                types['Fire']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Water']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Electric']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Grass']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ice']['Damage From'] *= superEffectiveVal / 100;
                types['Dragon']['Damage From'] *= superEffectiveVal / 100;
                types['Fairy']['Damage From'] *= superEffectiveVal / 100;
                break;
            case 'dark':
                // dmg
                types['Fighting']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Psychic']['Damage To'] *= superEffectiveVal / 100;
                types['Ghost']['Damage To'] *= superEffectiveVal / 100;
                types['Dark']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Fairy']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Fighting']['Damage From'] *= superEffectiveVal / 100;
                types['Psychic']['Damage From'] *= noEffectVal / 100;
                types['Bug']['Damage From'] *= superEffectiveVal / 100;
                types['Ghost']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Dark']['Damage From'] *= superEffectiveVal / 100;
                types['Fairy']['Damage From'] *= superEffectiveVal / 100;
                break;
            case 'steel':
                // dmg
                types['Fire']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Water']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Electric']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Ice']['Damage To'] *= superEffectiveVal / 100;
                types['Rock']['Damage To'] *= superEffectiveVal / 100;
                types['Steel']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Fairy']['Damage To'] *= superEffectiveVal / 100;
                // defs
                types['Normal']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Fire']['Damage From'] *= superEffectiveVal / 100;
                types['Grass']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Ice']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Fighting']['Damage From'] *= superEffectiveVal / 100;
                types['Poison']['Damage From'] *= noEffectVal / 100;
                types['Ground']['Damage From'] *= superEffectiveVal / 100;
                types['Flying']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Psychic']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Bug']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Rock']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Dragon']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Steel']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Fairy']['Damage From'] *= notVeryEffectiveVal / 100;
                break;
            case 'fairy':
                // dmg
                types['Fire']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Fighting']['Damage To'] *= superEffectiveVal / 100;
                types['Poison']['Damage To'] *= notVeryEffectiveVal / 100;
                types['Ghost']['Damage To'] *= superEffectiveVal / 100;
                types['Dragon']['Damage To'] *= superEffectiveVal / 100;
                types['Dark']['Damage To'] *= notVeryEffectiveVal / 100;
                // defs
                types['Fighting']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Poison']['Damage From'] *= superEffectiveVal / 100;
                types['Bug']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Dragon']['Damage From'] *= noEffectVal / 100;
                types['Dark']['Damage From'] *= notVeryEffectiveVal / 100;
                types['Steel']['Damage From'] *= superEffectiveVal / 100;
                break;
            default:
                console.log(`Something went wrong, ${type} does not exist in the ailments list`);
                break;
        }
    });

    let typesToLog = {};
    for (const i in types) {
        if (types[i]['Damage To'] !== 100 || types[i]['Damage From'] !== 100) {
            types[i]['Damage To'] = types[i]['Damage To'] + '%';
            types[i]['Damage From'] = types[i]['Damage From'] + '%';
            typesToLog[i] = types[i];
        }
    }
    return typesToLog;
}