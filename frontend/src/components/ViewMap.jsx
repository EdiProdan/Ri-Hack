import React from 'react'
import Map, {Marker, FullscreenControl, GeolocateControl, NavigationControl, ScaleControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapTrashType } from '../util/mapTrashType';
import { useState, useEffect } from 'react';


const ViewMap = () => {
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
<Map
          initialViewState={{
          longitude: 14.44,
          latitude: 45.33,
          zoom: 12
          }}
          style={{width: "100vw", height:"100vh"}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoiZWRpcHJvZGFuIiwiYSI6ImNsNXhwZzFmbDA2YWMzYnAyam14MXlsZWsifQ.pYEjpN5JomScSmpAU_YAiQ">
            <GeolocateControl position="top-right" />
            <FullscreenControl position="top-right" />
            <NavigationControl position="top-right" />
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
  )
}

export default ViewMap