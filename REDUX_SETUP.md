# Redux Project Mode

## Basic React Redux Setup
- [x] Install `redux` and `react-redux`   `npm i redux react-redux`
- [x] Create reducer function and default state
- [x] Create `store` with `createStore`
- [x] Create `Provider` at top level of component hierarchy with the `store` as a prop

## Reading State - with Hooks
- [x] Import `useSelector` in your component
- [x] Write a selector function to return whatever piece of state is important to your component

## Reading State - with `mapStateToProps`
- [x] Import `connect` in your component
- [x] On the line where you export your component, wrap it with `connect(mapStateToProps)(MyComponent)`
- [x] Write a `mapStateToProps` function to return whatever piece of state is important to your component

## Updating State - with Hooks
- [x] Import `useDispatch` in your component
- [x] Call `useDispatch` to get access to the `dispatch` function
- [x] Call `dispatch` with an action object: `{ type: "ACTION_TYPE", payload: data }`
- [x] In your reducer, write code to handle the action type and return the new state

## Updating State - with `mapDispatchToProps`
- [x] Import `connect` in your component
- [x] On the line where you export your component, wrap it with `connect(mapStateToProps, mapDispatchToProps)(MyComponent)`
- [x] Write a `mapDispatchToProps` function to return helper functions for capping actions
- [x] The helper functions should call `dispatch` with an action object: `{ type: "ACTION_TYPE", payload: data }`

## Rules for working with Redux
- Never mutate state directly in your reducer! Always return a new version of state. Use spread operator for objects and non-destructive array methods.
- Keep nested state to a minimum. Try to keep your state only one level deep.
- Don't duplicate state - use only the minimum amount of state necessary. Use `useSelector` or `mapStateToProps` to format your state nicely for your components.

## Advanced - Redux Thunk
Redux Thunk lets you write async action creators by giving you access to the `dispatch` function *inside* your action creators. It's primarily used to help organize your action creator code and keep your action logic separate from your component code.

Example use:
```js
export function setWeather(position) {
  return function (dispatch) {
    // you can dispatch multiple actions, so creating a loading/error state is easier
    dispatch({ type: "FETCHING_WEATHER" })

    getWeather(position[0], position[1])
      .then(weather => {
        dispatch({ type: "SET_WEATHER", payload: weather })
      })
  }
} 
```

Setup:
```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk));
```

## Advanced - Combine Reducers

For larger applications, it might make sense to have multiple reducers handling different parts of state rather than just one big standalone reducer. You can create separate reducers to handle different parts of state, and then use the `combineReducers` function to make one master reducer:

```js
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import pokemonReducer from './pokemonReducer'
import environmentReducer from './environmentReducer'

const reducer = combineReducers({
  environment: environmentReducer,
  pokemon: pokemonReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
```

## Advanced - Redux DevTools

Redux DevTools is a [Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) for debugging the Redux store.

From the docs - To make things easier, there's an npm package to install:

```sh
npm install redux-devtools-extension
```

Use like so:

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
```

## Example Folder Structure
```
src/
├── components/
│   ├── MyComponent1.js
│   └── MyComponent2.js
├── store/
│   └── user/
│   │   ├── actions.js
│   │   ├── reducer.js
│   │   └── types.js
│   ├── movies/
│   │   ├── actions.js
│   │   ├── reducer.js
│   │   └── types.js
│   └── index.js
├── App.js
└── index.js
```
