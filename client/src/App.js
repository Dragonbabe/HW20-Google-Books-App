import React from 'react';
import Search from './components/pages/Search';
import './App.css';
import NavBar from './components/pages/NavBar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Saved from './components/pages/Saved';




function App() {
  return (
    <Router>
      <div className="content">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
