var React = require('react');
var Link = require('react-router').Link;

var characterStore = require('../stores/characterStore');

var Search = React.createClass({

	getIntialState: function () {
		return {
			// characters: characterStore.getCharacters(),
            characterName1Value: '',
            characterName2Value: '',
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

				<input id="search-input-left"
					type="text"
					placeholder="Hero begins with..."
					value={this.props.character1NameValue}
					onKeyDown={this.onKeyDown}
					onChange={this.onChange}
					ref="characterNameInput1"
				/>
				<input id="search-input-right"
					type="text"
					placeholder="Foe begins with..."
					value={this.props.characterName2Value}
					onKeyUp={this.onKeyUp}
					onChange={this.onChange}
					ref="characterNameInput2"
				/>

			</div>	
		)
	},

	onKeyDown: function (e) {
		if (e.keyCode == 13) {
			characterStore.fetchCharacters(this.refs.characterNameInput1.value);
			this.setState({
				characterName1Value: ''
			})
		}
		this.props.onSearch(this.props.character);
	},

	onKeyUp: function (e) {
		if (e.keyCode == 13) {
			characterStore.fetchCharacters(this.refs.characterNameInput2.value);
			this.setState({
				characterName2Value: ''
			})
		}
		this.props.onSearch(this.props.character);
	},

	onChange: function () {
		this.setState({
			characterName1Value: this.refs.characterNameInput1.value,
			characterName2Value: this.refs.characterNameInput2.value
		})
	}


})



module.exports = Search;