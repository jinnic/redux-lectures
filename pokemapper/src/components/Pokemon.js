import React, { useState } from 'react'

const Pokemon = ({ pokemon }) => {
  const [showBack, setShowBack] = useState(false)

  const sprite = showBack && pokemon.back_sprite ? pokemon.back_sprite : pokemon.front_sprite

  return (
    <div className="pokemon">
      <div className="images">
        <img src={sprite} alt={pokemon.name} onClick={() => setShowBack(!showBack)} />
      </div>
      <div className="info">
        <h2>{pokemon.name}</h2>
        {pokemon.stats.map(stat =>
          <div key={stat.name}>
            <strong>{stat.name}: </strong>
            <span>{stat.base_stat}</span>
          </div>
        )}
      </div>

    </div>
  )
}

export default Pokemon