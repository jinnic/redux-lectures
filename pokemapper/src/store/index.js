import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './user/reducer'
import pokemonReducer from './pokemon/reducer'

const rootReducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store