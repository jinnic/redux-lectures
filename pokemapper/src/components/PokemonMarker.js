import React from 'react'
import { icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet'

const PokemonMarker = ({ pokemon }) => {

  const pokeIcon = icon({
    iconUrl: pokemon.front_sprite,
    iconSize: [96, 96],
    iconAnchor: [48, 48],
    popupAnchor: [0, -28]
  })

  return (
    <Marker position={[pokemon.lat, pokemon.lng]} icon={pokeIcon}>
      <Popup>
        <h1>{pokemon.name}</h1>
        {pokemon.stats.map(stat =>
          <div key={stat.name}>
            <strong>{stat.name}: </strong>
            <span>{stat.base_stat}</span>
          </div>
        )}
      </Popup>
    </Marker>
  )
}

export default PokemonMarker