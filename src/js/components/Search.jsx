var React = require('react');

var characterStore = require('../stores/characterStore');

var Search = React.createClass({

	getIntialState: function () {
		return {
            newCharacterNameValue: '',
        };
	},
	
	render: function () {
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