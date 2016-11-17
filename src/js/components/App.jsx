var React = require('react');

var Link = require('react-router').Link;
var CharacterSelection = require("./CharacterSelection.jsx");
var Results = require('./Results.jsx');
var Search = require('./Search.jsx');
var characterStore = ("../stores/characterStore.js");



function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var App = React.createClass({

	getInitialState: function () {
		return {
			characterNumber: null,
			displayResults: false,
			characterOne: null,
			characterTwo: null,
		}
	},

	render: function () {
		
		var leftCharacterImage;
		var rightCharacterImage;

		if (this.state.characterOne) {
			leftCharacterImage = this.state.characterOne.thumbnail.path + "." + this.state.characterOne.thumbnail.extension;
		} else {
			leftCharacterImage = "./Images/good.png";
		}

		if (this.state.characterTwo) {
			rightCharacterImage = this.state.characterTwo.thumbnail.path + "." + this.state.characterTwo.thumbnail.extension;
		} else {
			rightCharacterImage = "./Images/bad.png";
		}

		var results;
		if (this.state.displayResults) {
			results = <Results onChoose={this.onSelect} />;
		}

		return (
			<div>
				<div className="container">
					<div id="container-left">
						<CharacterSelection 
							id="left"
							image={leftCharacterImage}
							selected={this.characterNumber === 1 ? true : false}
							/>
					</div>
					<div id="container-right">
						<CharacterSelection 
							id="right"
							image={rightCharacterImage}
							selected={this.characterNumber === 2 ? true : false}
							/>
					</div>
				</div>
				<div id="contain">
				<Search id="left-search" character={1} onSearch={this.displayResults} />
				<div className="results"></div>
				<button className="button">BATTLE</button>
				<div className="results"></div>
				<Search id="right-search" character={2} onSearch={this.displayResults} />
				</div>
				{results}
				<div id="results-box"></div>
				<footer>
					<p>Data provided by Marvel. © 2014 Marvel</p>
					<p>Looks and Logic provided Kate & Monty.</p>
				</footer>
			</div>
		);
	},


	displayResults: function (selection) {
		this.setState({
			characterNumber: selection,
			displayResults: true
		})

	},

	onSelect: function (id) {
		var character = characterStore.getCharacters(id);
		if (this.state.characterNumber === 1) {
			this.setState({
				characterOne: character
			})
		} else if (this.state.characterNumber === 2) {
			this.setState({
				characterTwo: character
			})	
		}
	}
})

module.exports = App;