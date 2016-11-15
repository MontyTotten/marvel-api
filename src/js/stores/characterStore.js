var EventEmitter = require('eventemitter3');
var $ = require('jquery');

var characterStore = Object.create(EventEmitter.prototype);
EventEmitter.call(characterStore);

// Collection
var apiKey = '9bddb80853369b62c5366ed39b1a902f'

var characters = [];


characterStore.getCharacters = function (id) {
    if (id) {
        return characters.find((character) => character.id === id);
    } else {
        return characters;
    }
}

characterStore.fetchCharacters = function (characterName) {
    $.ajax({
        // method: 'GET',
        url: 'http://gateway.marvel.com/v1/public/characters?apikey=' + apiKey + '&nameStartsWith=' + characterName,
        success: function (response) {
            characters = response.data.results;
            characterStore.emit('update');
        }
    });

    return characters;
};

// function get () {
//     return characters;
// };


// characterStore.get = get;

window.characterStore = characterStore;

module.exports = characterStore;