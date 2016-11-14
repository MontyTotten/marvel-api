var React = require('react');

var Link = require('react-router').Link;
var Results = require('./Results.jsx');
var Search = require('./Search.jsx');


function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var App = React.createClass({

	getInitialState: function () {
		return	{
			// left: ,
			// right: ,
			active: 'left' || 'right' || null
		}
	},

	render: function () {
		
		return (
			<div>
				<header>
					<Link to="/" className={getActiveClass('/')}>Home</Link>
				</header>
				<main>
					<h1>Marvel App</h1>
					{this.props.children}
					<Search />
					<button>Fight</button>
					<Results />
				</main>
				<footer>
					<p>Data provided by Marvel. © 2014 Marvel</p>
					<p>Looks and Logic provided Kate & Monty.</p>
				</footer>
			</div>
		)
	}
})

module.exports = App;