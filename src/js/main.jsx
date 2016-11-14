var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

// {Router, Route, hashHistory } = require('react-router') // DESTRUCTURING 

var Router = ReactRouter.Router; // Root Component
var Route = ReactRouter.Route; 
var IndexRoute = ReactRouter.IndexRoute; // Does not take a path
var hashHistory = ReactRouter.hashHistory;

var App = require('./components/App.jsx');
// var Battleground = require('./components/Battleground.jsx');
// var Characters = require('./components/Characters.jsx');
var Home = require('./components/Home.jsx');
// var Results = require('./components/Results.jsx');
// var Search = require('./components/Search.jsx');


var jsx = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
		<IndexRoute component={Home} />
		</Route>
	</Router>
);

ReactDOM.render(jsx, document.querySelector('#app'));