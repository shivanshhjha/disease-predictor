import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import SignUp from './pages/signup';
import Coronatest from './pages/coronatest';
import SymptomChecker from './pages/symptomtest';
import CoronaCounter from './pages/coronaCounter';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/coronacheck" component={Coronatest} exact />
        <Route path="/symtom" component={SymptomChecker} exact />
        <Route path="/coronacounter" component={CoronaCounter} exact />
      </Switch>
    </Router>
  );
}

export default App;
