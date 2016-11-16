var React = require('react');
var Link = require('react-router').Link;

var characterStore = require('../stores/characterStore');

var Search = React.createClass({

	getIntialState: function () {
		return {
			// characters: characterStore.getCharacters(),
            characterNameValue: '',
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

				<input id="search-input"
					type="text"
					placeholder="Hero begins with..."
					// value={this.state.characterNameValue}
					onKeyDown={this.onKeyDown}
					onChange={this.onChange}
					ref="characterNameInput"
				/>
				
			</div>	
		)
	},

	onKeyDown: function (e) {
		if (e.keyCode == 13) {
			characterStore.fetchCharacters(this.refs.characterNameInput.value);
			this.setState({
				characterNameValue: ""
			})
		}
		this.props.onSearch(this.props.character);
	},

	onChange: function () {
		this.setState({
			characterNameValue: this.refs.characterNameInput.value
		})
	}


})



module.exports = Search;