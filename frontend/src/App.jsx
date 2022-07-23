import React from "react";
import User from "./components/User";
import Admin from "./components/Admin";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'

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
