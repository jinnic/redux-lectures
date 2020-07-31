

export const getPokemons = state => state.pokemon.pokemons

export const getFilteredPokemons = state => {
  return state.pokemons.filter(pokemon => pokemon.stats.hp < 60)
}