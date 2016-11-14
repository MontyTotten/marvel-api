var React = require('react');

var Search = require('./Search.jsx');

var Battleground = React.createClass({

	render: function () {
		return (
			<div>
				<h1>Battleground</h1>
				<Search />
                <button>Fight</button>
            </div>

		)
	}
});

module.exports = Battleground;