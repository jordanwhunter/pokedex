import React from 'react';
import NavBar from '../src/components/layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Dashboard />
      </>
    </div>
  );
}

export default App;
