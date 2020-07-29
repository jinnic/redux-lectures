
const initialState = {
  counter: 100,
  paused: true,
  likedNumbers: {},
  comment: "some comment",
  comments: []
}

// Pure function!
// takes in state and an action
// returns the next state
const reducer = (state = initialState, action) => {
  console.log("reducer", action)
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "TOGGLE_PAUSE":
      return {
        ...state,
        paused: !state.paused
      }
    case "LIKE_NUMBER":
      const count = (state.likedNumbers[state.counter] || 0) + 1
      return {
        ...state,
        likedNumbers: {
          ...state.likedNumbers,
          [state.counter]: count
        }
      }
    case "UPDATE_COMMENT":
      return {
        ...state,
        comment: action.payload
      }
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, state.comment],
        comment: ""
      }
    default:
      return state
  }
}

export default reducer