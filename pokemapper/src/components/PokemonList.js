import React from 'react'
import { useSelector } from 'react-redux'
import Pokemon from './Pokemon'
import { getPokemons } from '../store/pokemon/selectors'

const PokemonList = () => {
  const pokemons = useSelector(getPokemons)
  const loading = useSelector(state => state.pokemon.loading)

  if (loading) return <h2>Loading...</h2>

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, index) =>
        <Pokemon key={index} pokemon={pokemon} />
      )}
    </div>
  )
}

export default PokemonList