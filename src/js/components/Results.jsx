var React = require('react');

var characterStore = require('../stores/characterStore');
// var PokemonListItem = require('./PokemonListItem.jsx');


var Results = React.createClass({

	getInitialState: function () {
		return {
			offset: 20,
			characters: characterStore.fetchCharacters()
		};
	},

	componentWillMount: function () {
		var _this = this;
		characterStore.on('update', function () {
			_this.setState({
				characters: characterStore.getCharacters()
			})
		})
	}
});






module.exports = Results;