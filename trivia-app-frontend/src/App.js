import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
// import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import UserPage from './components/UserPage'
import QuestionListContainer from './containers/QuestionListContainer';
// import UserContainer from './containers/UserContainer';
import Home from './components/Home';
// import UserContainer from './containers/UserContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path={'/questions'} component={QuestionListContainer}></Route>
        <Route exact path={'/login'} component={Login}></Route>
        <Route exact path={'/signup'} component={Signup}></Route>
        <Route exact path={'/user'} component={UserPage}></Route>
        {/* <Route path={'/'} component={Home}></Route> */}
        <Route exact path={'/'} component={Home}></Route>
      </Router>
      {/* <h1>TRIVIA APP</h1> */}
      {/* < QuestionListContainer /> */}
    </div>
  );
}

export default App;
