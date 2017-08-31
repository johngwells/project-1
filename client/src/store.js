// *The reason we add this here instead of the head is so we can use middleware
// configure and create our store
// var store = createStore(reducers initialState) // []
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer/reducer';
import { createLogger } from 'redux-logger'

// Add middleware
let finalCreateStore = compose(
  applyMiddleware(createLogger())
)(createStore)

// the intial state is going to supplied to us. if not, our default
// an object with a todos property with an array. if intial state is not passed in, todos will be an empty array
export default function configureStore(initialState = { todos: [] }) {
  // line 8 is the equiv to line 10 using es6 syntax
  // initialState = initialState || { todos: []}
  return finalCreateStore(reducer, initialState)
}