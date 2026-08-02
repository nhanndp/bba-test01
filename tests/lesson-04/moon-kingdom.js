// Exercise 1:
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

console.log(possibleWinners);

// Exercise 2:
function createPlayers(name, score) {
    return {
        name: name,
        score: score
    }
};

const players = [
    createPlayers('Nhan', 100), //a
    createPlayers('Mihu', 50), //b
    createPlayers('Thao', 80)
];

const sortPlayers = players.sort((a, b) => b.score - a.score);

function printLeaderboard() {
    console.log(sortPlayers);
}

printLeaderboard();

