import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import * as actions from './actionTypes';
import { bugAdder, bugRemover, bugResolver } from './action';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const unsubscribe=store.subscribe(
//   ()=>console.log("Store changed!",store.getState())
// )

// store.dispatch(bugAdder("front-end bug"));
// store.dispatch(bugAdder("Backend bug"));
// store.dispatch(bugResolver(1));

// store.dispatch({
//   type:actions.BUG_ADDED,
//   payload:{
//     description:"bug1"
//   }
// })

// console.log(store.getState());

// store.dispatch({
//   type:actions.BUG_ADDED,
//   payload:{
//     description: "bug2"
//   }
// })

// console.log(store.getState());

// store.dispatch({
//   type:actions.BUG_DELETED,
//   payload:{
//     id:1
//   }
// })

// console.log(store.getState());
// console.log(store);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
