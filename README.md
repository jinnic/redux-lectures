Redux
===

## Intro to Redux

In the first part of the lecture, we'll talk about what Redux is, when it is useful, and some key concepts around using Redux.

Check the [INTRO.md](INTRO.md) file for more!

### Videos
- [Playlist](https://www.youtube.com/playlist?list=PLc6AmvC5ZybzGhcZCrQAL6E1yS8JzehPM)
- [Part 1: What is Redux?](https://youtu.be/ftfnqv918HM)
- [Part 2: Core Concepts](https://youtu.be/Qi40K2Vj4QE)
- [Part 3: Message Passing](https://youtu.be/zL1doYvi1Tc)
- [Part 4: Reducer and Dispatch](https://youtu.be/V5O6CIC3hYY)
- [Part 5: Using Redux](https://youtu.be/uZExhphm6aQ)

- [Part 1 Slides](https://docs.google.com/presentation/d/1VFwXKi3yPy17WZD6KnOsMTIxuOIxnapzIoowMXPZHVw/edit#slide=id.p)
- [Part 2 Slides](https://docs.google.com/presentation/d/1oKvrWKigPGhXahRPfTokL4NsoK0F1ywGJF3pUj51FAI/edit?usp=sharing)

### SWBATs
- [ ] Understand why Redux is useful
- [ ] Explain what a pure function is
- [ ] Explain the pattern / technique of message passing
- [ ] Refactor a component's behavior to use message passing 
- [ ] Install the redux library so it can be used in a project.
- [ ] Create a `store` in redux with some default `state`.
- [ ] Create a `reducer` to change `state` based on an `action.type`.
- [ ] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [ ] Read `state` in the `store`.

## React Redux

In the 2nd part of the lecture, we go over connecting Redux to React using `react-redux` and using some common functions from the `react-redux` library to let our components interact with the Redux store.

### Videos
- [Playlist](https://www.youtube.com/playlist?list=PLc6AmvC5ZybxBGCpOOvk3yLfi3HY1wm9h)
- [Part 1: Provider, connect, and mapStateToProps](https://youtu.be/RqeiiGKV5PQ)
- [Part 2: mapDispatchToProps](https://youtu.be/6baGQbwVPEg)
- [Part 3: connect with Multiple Components](https://youtu.be/onVnOnxc1MA)
- [Part 4: React Redux Hooks](https://youtu.be/Mhpkz_jabcs)

### SWBATs
- [ ] Install the `react-redux` library so it can be used in a project.
- [ ] Make the `store` available to their application by using the `Provider` component.
- [ ] Use `connect` to give components the ability to listen for changes to the `store`.
- [ ] Use `dispatch` in a React component.
- [ ] Use `mapStateToProps` to read data from the `state` in the Redux `store`.
- [ ] Use `mapDispatchToProps`
- [ ] *Bonus* Use action creators & object form of `mapDispatchToProps`
- [ ] *Bonus* React-Redux hooks: `useSelector` and `useDispatch`

## Part 3: Advanced Redux

We'll add `redux` to a React project and go through all the necessary setup. We'll also talk about code organization, as well as some additional tools such as `redux-thunk` for working with `fetch` and `redux`, and the Redux DevTools.

### Videos
- Coming soon!

### SWBATs
- [ ] Set up a project with Redux and React-Redux
- [ ] Organize Redux code
- [ ] Use Redux DevTools
- [ ] Install the `redux-thunk` library
- [ ] Use `applyMiddleware` from the redux library and `thunkMiddleware` from the redux-thunk library
- [ ] Create action creators that return functions in order to dispatch asynchronously
- [ ] Discuss best practices of action architecture when using thunk
