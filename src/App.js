import React from 'react';
import NavBar from '../src/components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import backgroundImage from './pokeball.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div 
      className='App' 
      style={
        { background: `url(${backgroundImage})`}
      }
    >
      <>
        <NavBar />
        <Dashboard />
      </>
    </div>
  );
}

export default App;
