import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { addComment } from './action.js'

import comments from './comments.js';
import users from './users.js';
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

const reducer = combineReducers({
  comments,
  users
});

const store = createStore(reducer,
  DevTools.instrument());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
store.subscribe(() => console.log(store.getState()))
store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

