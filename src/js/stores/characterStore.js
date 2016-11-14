var EventEmitter = require('eventemitter3');
var $ = require('jquery');

var characterStore = Object.create(EventEmitter.prototype);
EventEmitter.call(characterStore);

// Collection
var characters = [
	// Models
];

characterStore.getCharacters = function () {
	return characters;
}

characterStore.fetchCharacters = function (offset) {
    offset = offset || 0;
    $.ajax({
        // method: 'GET',
        url: 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=36769a518f5f56f57a4e8015958e73ccc3d614c5',
        success: function (response) {
            var results = response.results;
            characters = characters.concat(results);
            characterStore.emit('update');
        }
    });

    return characters;
};
