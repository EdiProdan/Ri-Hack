import React from 'react'
import Map, {Marker, FullscreenControl, GeolocateControl, NavigationControl, ScaleControl, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapTrashType } from '../util/mapTrashType';
import { useState, useEffect } from 'react';


const ViewMap = () => {
    let [containers, setContainers] = useState([])
    const [popupInfo, setPopupInfo] = useState(undefined);

    const mark = (containerId) => {
      let containersCopy = containers.map(container => {
        if (container.id === containerId) container.marked = true;
        return container
      })
      setContainers(containersCopy)
      setPopupInfo(null)
      /*fetch('https://localhost:8080/api/full-containers', {
        method:"POST",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Content-Type': "text-plain"
        },
        body: JSON.stringify({id: containerId})
      }).then(resp => resp.json()).then(json => console.log(json))*/
      alert("Administratori su obavješteni o situaciji. Zahvaljujemo na prijavi i trudu da naš grad učinite čišćim!")
    }
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
                onClick = {(e) => {
                  e.originalEvent.stopPropagation()
                  setPopupInfo({
                  longitude: container.locationLong,
                  latitude: container.locationLat,
                  type: mapTrashType(container.trashType).textCro,
                  marked: container.marked,
                  id: container.id,
                })
                  }}
               />
            )}
            {popupInfo && 
            <Popup
              offset={[0,-50]}
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
            >
              <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h4>Vrsta smeća: {popupInfo.type}</h4>
                {popupInfo.marked && <h3 style={{color: "red"}}>Kontejner je prijavljen kao pun</h3>}
                {!popupInfo.marked && <button style={{backgroundColor: "green", color:"white", padding:"4px"}} onClick={()=>mark(popupInfo.id)}><p>Prijavi kontejner kao prepun</p></button>}
              </div>
            </Popup>
            }
        </Map>
  )
}

export default ViewMap