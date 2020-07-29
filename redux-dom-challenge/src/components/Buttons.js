import React from 'react'
import { connect } from 'react-redux'

const Buttons = ({ decrement, increment, likeNumber, togglePause, paused }) => {

  return (
    <>
      <button onClick={decrement}>
        <span role="img" aria-label="minus">➖</span>
      </button>
      <button onClick={increment}>
        <span role="img" aria-label="plus">➕</span>
      </button>
      <button onClick={likeNumber}>
        <span role="img" aria-label="heart">❤️</span>
      </button>
      <button onClick={togglePause}>
        <span role="img" aria-label={paused ? "play" : "pause"}>
          {paused ? "▶️" : "⏸"}
        </span>
      </button>
    </>
  )
}

const mapStateToProps = state => {
  return {
    paused: state.paused
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    togglePause: () => dispatch({ type: "TOGGLE_PAUSE" }),
    likeNumber: () => dispatch({ type: "LIKE_NUMBER" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)