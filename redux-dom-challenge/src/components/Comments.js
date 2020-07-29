import React from 'react'
import { useSelector } from 'react-redux'

const Comments = () => {
  const comments = useSelector(state => state.comments)

  return (
    <>
      <h2>Comments:</h2>
      {comments.map(comment => <p key={comment}>{comment}</p>)}
      <hr />
    </>
  )
}

export default Comments