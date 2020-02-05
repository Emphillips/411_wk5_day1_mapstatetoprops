import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';




//STORE -> GLOBALIZED STATE - Hold all state
//We used one piece of stat *counter* (REDUCER)ie Auth reducer, search reducer.
//


//ACTION INCREMENT ie I'm hungry
//Simple function that returns an object
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}


//REDUCER
//Simple functions that returns an object
const counter = (state = 0, action) => {
      switch (action.type){
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
      }
};

let store = createStore(counter);

//Display in the console
store.subscribe(() => console.log(store.getState()));


//DISPATCH
store.dispatch(increment());
store.dispatch(decrement());







ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
