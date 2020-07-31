import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const weather = useSelector(state => state.user.weather)

  return (
    <div className="menu">
      <h1>PokeMapper</h1>
      <div className="weather">
        <h4>{weather.temperature}°F</h4>
        <span role="img" aria-label={weather.shortForecast}>{weather.icon}</span>
      </div>
    </div>
  )
}

export default Header