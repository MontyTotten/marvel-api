var React = require('react');
var Link = require('react-router').Link;

var characterStore = require('../stores/characterStore');

var Search = React.createClass({

	getIntialState: function () {
		return {
			characters: characterStore.getCharacters(),
            newCharacterNameValue: '',
        };
	},
	
	render: function () {
		// var links = this.state.characters.map(function (a) {
  //           return (
  //               <li key={a.id}>
  //                   <Link to={'/animals/' + a.id}>{a.name}</Link>
  //               </li>
  //           );
  //       });
		return (
			<div>
			
				<input
					type="text"
					placeholder="Hero begins with..."
					// value={this.state.newCharacterNameValue}
					onChange={this.handleNewCharacterName}
				/>
				<input
					type="text"
					placeholder="Foe begins with...."
					// value={this.state.newCharacterNameValue}
				/>
			</div>	
		)
	},

	handleNewCharacterName: function (e) {
        this.setState({
            newCharacterNameValue: e.target.value
        });
    },


})



module.exports = Search;