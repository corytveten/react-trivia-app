import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SignUpReducer from './reducers/SignUpReducer'
import questionsReducer from './reducers/questionsReducer';
import UsersReducer from './reducers/UsersReducer';
// import LoginReducer from './reducers/LoginReducer'
import './index.css';
import App from './App';

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
const reducers = combineReducers({
  SignUpReducer,
  questionsReducer,
  UsersReducer
})

const store = createStore(reducers, composedEnhancer)

// const store = createStore( 
//   SignUpReducer,
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


