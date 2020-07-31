import { SET_POSITION, SET_WEATHER, FETCH_WEATHER } from './types'
import { getWeather } from '../../api'

export const setPosition = (latitude, longitude) => {
  return {
    type: SET_POSITION,
    payload: [latitude, longitude]
  }
}

export const fetchWeather = (lat, lng) => dispatch => {
  dispatch({ type: FETCH_WEATHER })

  getWeather(lat, lng)
    .then(weather => {
      // then dispatch
      dispatch({
        type: SET_WEATHER,
        payload: weather
      })
    })
}