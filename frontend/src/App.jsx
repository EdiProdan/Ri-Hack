import React, { useEffect, useState } from 'react';
import './App.css';
import ButtonExpand from './components/ButtonExpand';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getTrashContainers } from './api/trashContainersApi';

function App() {

  let [containers, setContainers] = useState([])

  useEffect( () => {
    setContainers(getTrashContainers())
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
            {containers?.map((container) =>
              <Marker longitude={container.locationLong}
                      latitude={container.locationLat}
                      anchor="bottom"
                      key={container.id}
              />
            )}
        </Map>
        <ButtonExpand />
      </div>

  );
}

export default App;
