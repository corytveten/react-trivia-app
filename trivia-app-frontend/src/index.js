import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import questionsReducer from './reducers/questionsReducer';
import UsersReducer from './reducers/UsersReducer';
import './index.css';
import App from './App';

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
const reducers = combineReducers({
  questionsReducer,
  UsersReducer
})

const store = createStore(reducers, composedEnhancer)


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


