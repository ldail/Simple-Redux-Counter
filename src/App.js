import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index';
import {connect} from 'react-redux';
import {reselect} from 'reselect'

function App(props) {
  // const counter = useSelector(state => state.counterReducer)
  // const isLogged = useSelector(state => state.isLogged)
  const {counter, isLogged} = props
  const {increment, decrement} = props
  return (
    <div className="App">
      <h1>Counter = {counter}</h1>

      {isLogged ?
      <h3>Valuable information I shouldn't see !!!</h3>
      : null }
      <div>
        <label htmlFor="incrementInput">What value to increment?</label>
        <input type="text" placeholder="1" id="incrementInput" name="incrementInput" />
        <button onClick={() => {
          console.log(Number(document.querySelector('#incrementInput').value))
          console.log(typeof Number(document.querySelector('#incrementInput').value));
          increment(Number(document.querySelector('#incrementInput').value))}
        }>+</button>
      </div>
      <div>
        <label htmlFor="decrementInput">What value to decrement?</label>
        <input type="text" placeholder="1" id="decrementInput" name="decrementInput" />
        <button onClick={() => {
          console.log(Number(document.querySelector('#decrementInput').value))
          console.log(typeof Number(document.querySelector('#decrementInput').value));
          decrement(Number(document.querySelector('#decrementInput').value))
        }}>-</button>
      </div>
    </div>
  );
      }

const mapStateToProps = state => ({
  counter: state.counterReducer,
  isLogged: state.isLogged
})
const mapDispatchToProps = dispatch => ({
  increment: (num) => dispatch(increment(num)),
  decrement: (num) => dispatch(decrement(num))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
