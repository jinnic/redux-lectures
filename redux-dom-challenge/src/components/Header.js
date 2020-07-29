import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  console.log("Header rendering")
  const counter = useSelector(state => state.counter)

  return (
    <>
      <h1>Redux DOM Challenge</h1>
      <h2>Counter: {counter}</h2>
    </>
  )
}

export default Header