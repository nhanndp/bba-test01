// EXERCISE 1:
const { create } = require("node:domain");

function createCharacters(name, level, health) {
    return {
        name: name,
        level: level,
        health: health
    }
};

const characters = [
    createCharacters('Mario', 1, 100),
    createCharacters('Toad', 2, 400),
    createCharacters('Nhan', 3, 800)
];

const charactersPowerUp = characters.map(({ name, level, health }) => (
    {
        name: name.toUpperCase(),
        level: level * 2,
        health: health * 3
    }
));

//console.log(charactersPowerUp);

const possibleWinners = charactersPowerUp.filter(characters => characters.health > 1000);

console.log('EXERCISE 1: List of possible winners: ', '\n', possibleWinners, '\n');

// EXERCISE 2:
function createPlayers(name, score) {
    return {
        name: name,
        score: score
    }
};

const players = [
    createPlayers('Mario', 1000),
    createPlayers('Luigi', 900),
    createPlayers('Peach', 850),
    createPlayers('Yoshi', 800),
    createPlayers('Nhan', 500)
];

const sortPlayers = players.sort((a, b) => b.score - a.score);
const leaderboard = sortPlayers.map(({ name, score }) => (
    {
        name: name,
        score: score
    }
)
);

function printLeaderboard() {
    console.log('EXERCISE 2: The leaderboard is:');
    for (let i = 0; i < leaderboard.length; i++) {
        console.log((i + 1) + '. ' + leaderboard[i].name + ' - ' + leaderboard[i].score + ' pts');
    }
};

printLeaderboard();