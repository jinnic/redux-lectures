import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PokemonMap from './PokemonMap';
import Header from './Header';
import PokemonList from './PokemonList';
import { fetchPokemons } from '../store/pokemon/actions'
import { setPosition, fetchWeather } from '../store/user/actions'

const App = () => {

  const icon = useSelector(state => state.user.weather.icon)
  const position = useSelector(state => state.user.position)
  const positionLoaded = useSelector(state => state.user.positionLoaded)

  const dispatch = useDispatch()

  useEffect(() => {
    // get the user's location (lat/lng)
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords

      dispatch(setPosition(latitude, longitude))
    }, err => console.error(err));

    // get pokemons
    dispatch(fetchPokemons())
  }, [dispatch])

  useEffect(() => {
    if (positionLoaded) {
      const [lat, lng] = position

      // get weather based on position
      dispatch(fetchWeather(lat, lng))
    }
  }, [dispatch, position, positionLoaded])

  return (
    <div className={`App ${icon}`}>
      <Header />
      <main>
        <PokemonList />
        <PokemonMap />
      </main>
    </div>
  );
}

export default App
