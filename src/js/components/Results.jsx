var React = require('react');

var characterStore = require('../stores/characterStore');
var Character = require('./Character.jsx')
var Search = require('./Search.jsx');



var Results = React.createClass({


	getInitialState: function () {
		return {
			searchResults: characterStore.getCharacters()
		}
	},

	componentWillMount: function () {
		var _this = this;
		characterStore.on("update", function () {
			_this.setState({
				searchResults: characterStore.getCharacters()
			})
		})
	},

	render: function () {
		var _this = this;
		var characters = this.state.searchResults.map(function (character) {
			return ( 
				<Character
				name={character.name}
				key={character.id}
				id={character.id}
				onChoose={_this.props.onChoose}
				thumb={character.thumbnail.path + "." + character.thumbnail.extension} />
				);
		})


		return (
			<ul id="character-results-list">
				{characters}
			</ul>
		);
	}
});

module.exports = Results;

		
