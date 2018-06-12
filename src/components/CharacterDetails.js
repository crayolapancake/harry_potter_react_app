import React from 'react';

const CharacterDetails = (props) => {
  if (!props.character) return null // props.character is coming from CharacterContainer line 34.
  return (
    <div>
      <h3>Name: {props.character.name}
      </h3>
      <h4>House: {props.character.house}
      </h4>
      <h4>Wand Wood: {props.character.wand.wood}
      </h4>
      <h4>Wood Length: {props.character.wand.length}
      </h4>
      <img className='character-image' src={props.character.image} />
    </div>
  )

}



export default CharacterDetails;
