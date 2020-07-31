import React from 'react';
import { connect } from 'react-redux'
import PokemonMap from './PokemonMap';
import Header from './Header';
import PokemonList from './PokemonList';
import { getPokemons } from '../api'

// const weather = { temperature: 85, temperatureUnit: "F", shortForecast: "Sunny", icon: "☀️" }
// const position = [40.7008739, -73.9875141]
// const pokemons = [{ "name": "quagsire", "back_sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/195.png", "front_sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png", "stats": [{ "base_stat": 35, "name": "speed" }, { "base_stat": 65, "name": "special-defense" }, { "base_stat": 65, "name": "special-attack" }, { "base_stat": 85, "name": "defense" }, { "base_stat": 85, "name": "attack" }], "lat": 40.699641625343126, "lng": -73.98946603152181 }, { "name": "aurorus", "back_sprite": null, "front_sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png", "stats": [{ "base_stat": 58, "name": "speed" }, { "base_stat": 92, "name": "special-defense" }, { "base_stat": 99, "name": "special-attack" }], "lat": 40.701235859047294, "lng": -73.98229625164312 }, { "name": "kingler", "back_sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/99.png", "front_sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png", "stats": [{ "base_stat": 75, "name": "speed" }, { "base_stat": 50, "name": "special-defense" }, { "base_stat": 50, "name": "special-attack" }], "lat": 40.69547691646669, "lng": -73.9829402438478 }]

class App extends React.Component {

  componentDidMount() {
    getPokemons()
      .then(pokemons => this.props.setPokemons(pokemons))
  }

  render() {
    console.log(this.props)
    const { icon } = this.props
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
}

const mapStateToProps = state => {
  return {
    icon: state.weather.icon
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPokemons: pokemons => dispatch({ type: "SET_POKEMONS", payload: pokemons })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
