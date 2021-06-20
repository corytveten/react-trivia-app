import React from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
// import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import QuestionListContainer from './containers/QuestionListContainer';
import UserContainer from './containers/UserContainer';
import Home from './components/Home';

function App() {
  const history = createBrowserHistory()
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path={'/questions'} component={QuestionListContainer}></Route>
        <Route history={history} exact path={'/login'} component={Login}></Route>
        <Route history={history} exact path={'/signup'} component={Signup}></Route>
        <UserContainer />
        {/* <Route path={'/'} component={Home}></Route> */}
        <Route exact path={'/'} component={Home}></Route>
      </Router>
      {/* <h1>TRIVIA APP</h1> */}
      {/* < QuestionListContainer /> */}
    </div>
  );
}

export default App;
