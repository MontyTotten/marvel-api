var React = require('react');

var CharacterSelection = React.createClass({

	render: function () {
		var style = {
			"backgroundImage": "url(" + this.props.image + ")"
		}
		return ( 
			<div id={this.props.id} style={style}>
			</div>
		)
	}
});


module.exports = CharacterSelection;