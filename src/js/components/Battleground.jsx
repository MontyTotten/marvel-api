var React = require('react');

var Battleground = React.createClass({

	render: function () {
		return (
			<div>
				<h1>Battleground</h1>
				<input
                    type="text"
                    // value={this.state.newAnimalNameValue}
                    // onChange={this.handleNewAnimalNameChange}
                    />
                <input
                    type="text"
                    // value={this.state.newAnimalSpeciesValue}
                    // onChange={this.handleNewAnimalSpeciesChange}
                    />
                <button></button>
            </div>

		)
	}
});

module.exports = Battleground;