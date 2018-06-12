import React from 'react';

const CharacterSelect = (props) => {

  const options = props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  })

  function handleSelect(event) {
    props.onCharacterSelected(event.target.value)
  }

  return(
    <select className="character-select" defaultValue='default' onChange={handleSelect}>
      <option disabled value='default'>Choose a character...</option>
      {options}
    </select>
  )
}

export default CharacterSelect;
