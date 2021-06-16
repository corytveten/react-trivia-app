import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import QuestionListContainer2 from './containers/QuestionListContainer2';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path={'/questions'} component={QuestionListContainer2}></Route>
        <Route exact path={'/login'} component={Login}></Route>
        <Route exact path={'/'} component={Home}></Route>
      </Router>
      {/* <h1>TRIVIA APP</h1> */}
      {/* < QuestionListContainer /> */}
    </div>
  );
}

export default App;
