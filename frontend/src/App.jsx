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
        mapboxAccessToken="pk.eyJ1IjoiZWRpcHJvZGFuIiwiYSI6ImNsNXhwZzFmbDA2YWMzYnAyam14MXlsZWsifQ.pYEjpN5JomScSmpAU_YAiQ"
       />
        <ButtonExpand />
      </div>

  );
}

export default App;
