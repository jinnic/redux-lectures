import { SET_POKEMONS, FETCH_POKEMONS, ADD_POKEMON } from './types'
import { getPokemons, addPokemon } from '../../api'

// thunky action!
// action that returns a function instead of returning an object
export const fetchPokemons = () => dispatch => {
  // run async code
  dispatch({ type: FETCH_POKEMONS })

  getPokemons()
    .then(pokemons => {
      // then dispatch
      dispatch({
        type: SET_POKEMONS,
        payload: pokemons
      })
    })
}

export const postPokemon = (lat, lng) => dispatch => {
  addPokemon(lat, lng)
    .then(pokemon => {
      dispatch({
        type: ADD_POKEMON,
        payload: pokemon
      })
    })
}