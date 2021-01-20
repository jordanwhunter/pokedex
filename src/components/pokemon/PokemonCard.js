import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import gif from '../../loading-wheel.gif';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
`;

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black; 
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const PokemonCard = ({ pokemon, url }) => {
  const [sprite, setSprite] = useState('')
  const [loadImage, setLoadImage] = useState(true)
  const [tooManyRequests, setTooManyRequests] = useState(false)
  const [indexNum] = useState(url.split('/')[url.split('/').length - 2])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon)
      .then (res => {
        setSprite(res.data.sprites.front_default)
      })
  }, [pokemon])

  return (
    <div className='col-md-3 col-sm-6 mb-5'>
      <StyledLink to={`pokemon/${indexNum}`}>
        <Card className='card'>
          <p className='card-header'>
            <img 
              src='https://icon-library.com/images/small-pokeball-icon/small-pokeball-icon-4.jpg' 
              alt='Pokéball Icon'
              width='40px'
              height='31.75px'
            />
            {indexNum}
          </p>
          {loadImage ? (
            <img
              className='card-img-top rounded mx-auto d-block mt-2'
              src={gif}
              alt='Loading'
              style={{
                width: '5em',
                height: '5em'
              }}
            />
          ) : null}
          <div className='card-body'>
              <center>
                <Sprite
                className='card-img-top rounded mx-auto mt-2' 
                src={sprite} 
                alt='Pokémon Sprite'
                onLoad={() => setLoadImage(false)}
                onError={() => setTooManyRequests(true)}
                style={
                  tooManyRequests ? { display: 'block'} :
                  loadImage ? null : { display: 'block'}
                }
                />
                <h6>
                  {pokemon
                    .toLowerCase()
                    .split('-')
                    .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                    .join(' ')
                  }
                </h6>
              </center>
          </div>
        </Card>
      </StyledLink>
    </div>
  )
  
}

export default PokemonCard
