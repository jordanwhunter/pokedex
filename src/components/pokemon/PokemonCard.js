import React, { useState } from 'react';

const PokemonCard = ({ pokemon }) => {
  const [pokeName, setPokeName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [indexNum, setIndexNum] = useState('');

  // const name = this.props.name;

  return (
    <div className='col-md-3 col-sm-6 mb-5'>
      <div className='card'>
        <div className='card-header'>
          <p>
            {pokemon}
          </p>
        </div>
      </div>
    </div>
  )
  
}

export default PokemonCard
