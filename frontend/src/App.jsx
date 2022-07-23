import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import ButtonExpand from './components/ButtonExpand';
import Map, {Marker, FullscreenControl, GeolocateControl, NavigationControl, ScaleControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapTrashType } from './util/mapTrashType';

function App() {

  let [containers, setContainers] = useState([])

  useEffect( () => {
    fetch("http://localhost:8080/api/trash-containers", {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin':'*'
            }
          })
        .then(response => response.json())
        .then(json => setContainers(json))
  }, [])

  return (
      <div className="container">  
        <Map
          initialViewState={{
          longitude: 14.44,
          latitude: 45.33,
          zoom: 14
          }}
          style={{width: "100vw", height:"100vh"}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoiYm9qYW5wdXZhY2EiLCJhIjoiY2w1eHIydmpoMHdndzNibnBuOHA0OWtzcSJ9.9EKcXB_wGL918f5HDKd2mA">
            <GeolocateControl position="top-left" />
            <FullscreenControl position="top-left" />
            <NavigationControl position="top-left" />
            <ScaleControl />
            {containers.map((container) =>
              <Marker longitude={container.locationLong}
                latitude={container.locationLat}
                anchor="bottom"
                key={container.id}
                color={mapTrashType(container.trashType).color}
               />
            )}
        </Map>
        <ButtonExpand />
      </div>

  );
}

export default App;
