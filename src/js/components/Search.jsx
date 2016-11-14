var React = require('react');

var Search = React.createClass({
	
	render: function () {
		return (
			<div>
				<input
					type="text"
					placeholder="Hero begins with..."
					// value={this.state.newAnimalNameValue}
					// onChange={this.handleNewAnimalNameChange}
				/>
				<input
					type="text"
					placeholder="Foe begins with..."
					// value={this.state.newAnimalSpeciesValue}
					// onChange={this.handleNewAnimalSpeciesChange}
				/>
			</div>	
		)
	}
})


module.exports = Search;