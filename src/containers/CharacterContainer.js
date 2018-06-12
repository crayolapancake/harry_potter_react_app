import React from 'react';
import CharacterSelect from '../components/CharacterSelect';
import CharacterDetails from '../components/CharacterDetails';

class CharacterContainer extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    }
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this)
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters'
    fetch(url)
      .then(res => res.json())
      .then(charactersData => this.setState({characters: charactersData}))
      .catch(error => console.log("Error:", error))
  }

  handleCharacterSelected(index) {
    const selectedCharacter = this.state.characters[index]
    this.setState({currentCharacter: selectedCharacter})
  }

  render() {
    return (
      <div>
        <h2>Harry Potter Characters</h2>
        <CharacterSelect characters={this.state.characters}
        onCharacterSelected={this.handleCharacterSelected}/>
        <CharacterDetails character={this.state.currentCharacter}/>
      </div>
    )
  }



}



export default CharacterContainer
