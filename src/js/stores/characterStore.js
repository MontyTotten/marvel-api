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
        url: 'http(s)://gateway.marvel.com/9bddb80853369b62c5366ed39b1a902f',
        success: function (response) {
            var results = response.results;
            characters = characters.concat(results);
            characterStore.emit('update');
        }
    });

    return characters;
};
