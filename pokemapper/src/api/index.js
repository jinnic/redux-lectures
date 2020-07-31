export const getWeather = (lat, lng) => {
  return fetch(`http://localhost:3000/weather?lat=${lat}&lng=${lng}`)
    .then(r => r.json())
}

export const getPokemons = () => {
  return fetch(`http://localhost:3000/pokemons`)
    .then(r => r.json())
}

export const addPokemon = (lat, lng) => {
  return fetch(`http://localhost:3000/pokemons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ lat, lng })
  })
    .then(r => r.json().then(data => {
      if (r.ok) return data
      throw data
    }))
}

