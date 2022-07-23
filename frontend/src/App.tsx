import React from 'react';
import './App.css';
import BoxMap from './components/Map';
import ButtonExpand from './components/ButtonExpand';

function App() {
  return (
    <>
    <div className="container">  
      <BoxMap />
      <ButtonExpand />
    </div>
    </>
  );
}

export default App;
