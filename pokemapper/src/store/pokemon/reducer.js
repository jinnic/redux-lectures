import { ADD_POKEMON, SET_POKEMONS, FETCH_POKEMONS } from './types'

const defaultState = {
  pokemons: [],
  loading: false
}

const reducer = (state = defaultState, action) => {
  console.log("PokemonReducer", action)
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        loading: true
      }
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      }
    case ADD_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload]
      }
    default:
      return state
  }
}

export default reducer