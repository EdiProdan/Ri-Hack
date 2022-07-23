import React from 'react';
import './App.css';
import ButtonExpand from './components/ButtonExpand';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (

      <div className="container">  
        <Map
        initialViewState={{
        longitude: 14,
        latitude: 45,
        zoom: 14
        }}
        style={{width: "100vw", height:"100vh"}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiYm9qYW5wdXZhY2EiLCJhIjoiY2w1eHIydmpoMHdndzNibnBuOHA0OWtzcSJ9.9EKcXB_wGL918f5HDKd2mA"
       />
        <ButtonExpand />
      </div>

  );
}

export default App;
