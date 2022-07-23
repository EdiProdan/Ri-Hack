import React from 'react';
import './App.css';
import User from './components/User';
import Admin from './components/Admin';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<User />} />
        <Route exact path='/admin' element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
