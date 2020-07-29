Intro to Redux
===

## Videos
- [Playlist](https://www.youtube.com/playlist?list=PLc6AmvC5ZybzGhcZCrQAL6E1yS8JzehPM)
- [Part 1: What is Redux?](https://youtu.be/ftfnqv918HM)
- [Part 2: Core Concepts](https://youtu.be/Qi40K2Vj4QE)
- [Part 3: Message Passing](https://youtu.be/zL1doYvi1Tc)
- [Part 4: Reducer and Dispatch](https://youtu.be/V5O6CIC3hYY)
- [Part 5: Using Redux](https://youtu.be/uZExhphm6aQ)

- [Part 1 Slides](https://docs.google.com/presentation/d/1VFwXKi3yPy17WZD6KnOsMTIxuOIxnapzIoowMXPZHVw/edit#slide=id.p)
- [Part 2 Slides](https://docs.google.com/presentation/d/1oKvrWKigPGhXahRPfTokL4NsoK0F1ywGJF3pUj51FAI/edit?usp=sharing)

## SWBATs
- [ ] Understand why Redux is useful
- [ ] Explain what a pure function is
- [ ] Explain the pattern / technique of message passing
- [ ] Refactor a component's behavior to use message passing 
- [ ] Install the redux library so it can be used in a project.
- [ ] Create a `store` in redux with some default `state`.
- [ ] Create a `reducer` to change `state` based on an `action.type`.
- [ ] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [ ] Read `state` in the `store`.


![React State vs. Redux](https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-03.svg)

Redux **will** test your JavaScript knowledge to the **MAX**!!!

## Redux Core Concepts
[Three Principles](https://redux.js.org/introduction/three-principles)

- **Single source of truth.** The global state of your application is stored in an object tree within a single store.
- **State is read-only.** The only way to change the state is to emit an action, an object describing what happened.
- **Changes are made with pure functions.** To specify how the state tree is transformed by actions, you write pure reducers.

## Pure Functions
A pure function is a function that has the following properties: 
- Its return value is the same for the same arguments. 
- Its evaluation has no side effects.

In terms of code, this means that a pure function must always return the same value when called with the same data:

```js
const double = num => num * 2       

const random = () => Math.random()  
```

```js
const double = num => num * 2       
// pure! same input produces same result every time

const random = () => Math.random()  
// not pure! same input produces different results
```

A pure function also can't have side effects, such as mutating data:

```js
const addToArrayDestructive = (array, newElement) => {
  array.push(newElement)        
  return array
}
// not pure! mutates the array

const addToArrayNonDestructive = (array, newElement) => {
  return [...array, newElement] 
}
// pure! Doesn't mutate the original array
```

## Message Passing
> "Message passing is a technique for invoking behavior (i.e., running a program) on a computer. In contrast to the traditional technique of calling a program by name, message passing uses an object model to distinguish the general function from the specific implementations. The invoking program sends a message and relies on the object to select and execute the appropriate code." -Wikipedia

Message passing is built on the idea of centralization of program flow: all program flows pass through **one** central function, which in turn invokes the desired functionality. In order to do this, the central function needs to be told 2 things: **a type** which tells the central function which function to call, and, because functions sometimes need data, **a payload** which contains all of the data needed to run the desired function (usually an object).

CLI:

```rb
def menu(choice, data)
  case choice
  when 1
    print_turtles
  when 2
    new_turtle
  when 3
    select_turtle
  when 4
    create_turtle(data)
  when 5
    delete_turtle(data)
  end
end
```

Routes + Controllers:
```rb
class TurtlesController < ApplicationController
  def index
    # ...
  end

  def new
    # ...
  end

  def create
    # ...
  end
  
  # etc.
end

# routes.rb
get "/turtles", to: "turtles#index"
get "/turtles/new", to: "turtles#new"
post "/turtles", to: "turtles#create"
```

## Vocabulary
- [ ] Redux - a global state management system
- [ ] store - return value of the `createStore`. Holds your global state. Also contains the functions for reading (`getState`) and writing (`dispatch`) to state.
- [ ] reducer - A function that is used to create new state by REDUCING the old state and the incoming data (payload) into a new state. Uses message passing based on your `action.type` to control what gets returned.
- [ ] getState() - gets the state (read state)
- [ ] dispatch() - changes state (write state) 
- [ ] action - contains the message that tells your reducer how to change state. always has a type attribute, may have payload attribute to contain incoming data. a POJO
- [ ] type - attribute of the action containing a string that is used to control program flow in the reducer
- [ ] payload - part of the action. contains the data that will be used to change state

![Redux Data Flow](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)

## Redux setup

1. Write a `reducer` function
```js
// the most basic template of a reducer:
const defaultState = {
  // whatever you want
}
function reducer(state = defaultState, action){
  // remember: WHATEVER is returned from the reducer BECOMES state
  return state
}
```

2. Create Store
```js
import {createStore} from 'redux'

// give the reducer to your store so it can initialize and setup your state
const store = createStore(reducer)
```

### Reading and Writing to Redux
```js
// read from redux
store.getStore()

// write to redux
store.dispatch({type: "SOME_TYPE"})
```

`dispatch` takes one argument: a POJO that we call an action. The action must at a minimum have a `type` attribute which will be used to figure out which part of your reducer to call. Any other data that is needed to change state is passed in as an attribute on the action that is called, by convention, `payload`.

```js
store.dispatch({type: "SOME_TYPE", payload: {data: "my data"}})
```

## Information Flow

Everytime `dispatch` is called, the `reducer` is called. The 1st argument is the previous state, the 2nd argument is the `action` object that was passed in when `dispatch` was called. Whatever is returned from `reducer` then **becomes** state (i.e. it does not update state, it completely **overwrites** it)

### Additional Resources
- [Cartoon Intro to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)