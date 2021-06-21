import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SignUpReducer from './reducers/SignUpReducer'
// import LoginReducer from './reducers/LoginReducer'
import './index.css';
import App from './App';

const store = createStore( 
  SignUpReducer,
  // LoginReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


