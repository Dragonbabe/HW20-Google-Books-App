import React from 'react';
import Search from './components/pages/Search';
import './App.css';
import NavBar from './components/pages/NavBar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="content">
        <NavBar/>
        <Search/>
        <Switch>
          <Route exact path="/" component={Search}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
