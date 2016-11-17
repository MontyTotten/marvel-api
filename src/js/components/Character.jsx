var React = require('react');

var Character = React.createClass({

	// <Character
		// name={character.name}
		// key={character.id}
		// id={character.id}
		// onChoose={this.props.onSelect} />
		// );

	render: function () {
		return (
			<li className="character-list" onClick={this.handleClick}>
				<div className="contain-char">
					<div className="character-name">{this.props.name}</div>
					<img src={this.props.thumb} className="thumb" />
				</div>
			</li>
		);
	},

	handleClick: function () {
		this.props.onChoose(this.props.id);
	}
});


module.exports = Character;