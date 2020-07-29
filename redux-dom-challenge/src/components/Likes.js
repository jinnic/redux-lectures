import React from 'react'
import { useSelector } from 'react-redux'

const Likes = () => {
  const likedNumbers = useSelector(state => state.likedNumbers)

  return (
    <>
      <h2>Likes:</h2>
      {Object.keys(likedNumbers).map(key => <p key={key}>{key}: {likedNumbers[key]} likes</p>)}
      <hr />
    </>
  )
}

export default Likes