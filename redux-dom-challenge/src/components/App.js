import React from "react";
import { connect } from 'react-redux'
import Buttons from "./Buttons";
import Header from "./Header";
import Likes from "./Likes";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

class App extends React.Component {

  componentDidMount() {
    setInterval(() => {
      if (!this.props.paused) {
        this.props.increment()
      }
    }, 1000)
  }

  render() {
    console.log("App rendering")
    return (
      <div className="App">
        <Header />
        <Buttons />
        <Likes />
        <Comments />
        <CommentForm />
      </div>
    );
  }

}

// connect is a Higher Order Fn - returns another function
// the fn it returns is a Higher Order Component

// takes in redux state as arg
// return an object that has the value we want for props
const mapStateToProps = state => {
  return {
    paused: state.paused,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);