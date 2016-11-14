var EventEmitter = require('eventemitter3');
var $ = require('jquery');

var characterStore = Object.create(EventEmitter.prototype);
EventEmitter.call(characterStore);

// Collection
var characters = [];

var characterName = 'Spider';

characterStore.getCharacters = function () {
	return characters;
}

characterStore.fetchCharacters = function () {
    // offset = offset || 0;
    $.ajax({
        // method: 'GET',
        url: 'http://gateway.marvel.com/v1/public/characters?' + 'nameStartsWith=' + characterName + '&apikey=9bddb80853369b62c5366ed39b1a902f',
        success: function (response) {
            characters = response.data.results;
            characterStore.emit('update');
        }
    });

    return characters;
};

function get () {
    return characters;
}


characterStore.get = get;

window.characterStore = characterStore;

module.exports = characterStore;