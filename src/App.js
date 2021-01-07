import React from 'react';
import NavBar from '../src/components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <>
        <NavBar />
        <Dashboard />
      </>
    </div>
  );
}

export default App;
