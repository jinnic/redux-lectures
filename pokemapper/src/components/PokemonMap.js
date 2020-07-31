import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Map, TileLayer } from 'react-leaflet'
import PokemonMarker from './PokemonMarker'
import { postPokemon } from '../store/pokemon/actions'
import { getPokemons } from '../store/pokemon/selectors'

const maps = {
  "☀️": {
    url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
  "❄️": {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
  "🌧": {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
  "☁️": {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
}

const PokemonMap = () => {
  const dispatch = useDispatch()

  const pokemons = useSelector(getPokemons)
  const { position, weather } = useSelector(state => state.user)
  const { icon } = weather

  const map = maps[icon] ? maps[icon] : maps["☀️"]

  const handleMapClick = mapDetails => {
    const { lat, lng } = mapDetails.latlng
    dispatch(postPokemon(lat, lng))
  }

  return (
    <Map center={position} zoom={15} onClick={handleMapClick} style={{ height: "84vh" }}>
      <TileLayer url={map.url} attribution={map.attribution} />
      {pokemons.map((pokemon, index) => <PokemonMarker key={index} pokemon={pokemon} />)}
    </Map>
  )
}

export default PokemonMap
