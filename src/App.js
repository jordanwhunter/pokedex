import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../src/components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
import backgroundImage from './pokeball.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div 
        className='App' 
        style={{
          background: `url(${backgroundImage})`
        }}
      >
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route 
              exact path='/pokemon/:indexNum' 
              render={(props) => <Pokemon {...props} />} 
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
