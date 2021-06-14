import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import QuestionListContainer from './containers/QuestionListContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={'/questions'} component={QuestionListContainer}></Route>
        <Route path={'/'} component={Home}></Route>
      </Router>
      {/* <h1>TRIVIA APP</h1> */}
      {/* < QuestionListContainer /> */}
    </div>
  );
}

export default App;
