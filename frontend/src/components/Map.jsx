import React from 'react'
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { mapTrashType } from '../util/mapTrashType';

mapboxgl.accessToken = 'pk.eyJ1IjoiYm9qYW5wdXZhY2EiLCJhIjoiY2w1eHIydmpoMHdndzNibnBuOHA0OWtzcSJ9.9EKcXB_wGL918f5HDKd2mA';

const BoxMap = () => {
    const [clickedMarkerCoords, setClickedMarkerCoords] = useState([0,0])
    const markers = new Map()

    const handleClick = (id) => {
        const marker = markers.get(id).marker;
        console.log(id)
        marker.setHTML(`
        <div style="display: flex; flex-direction: column; align-items: center">
            <p >Vrsta kontejnera: ${markers.get(id).container.id}</p>
            <button style="color:red" disabled"><h4>Netko je već označio kontejner kao pun</h4></button>
        </div>
        `)
    } 

    useEffect(() => {
        fetch("http://localhost:8080/api/trash-containers", {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin':'*'
            }
          })
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(json => {
            
            const trashContainers = json
            console.log(trashContainers)
            trashContainers.forEach((container) => {
                const {color, textCro} = mapTrashType(container.trashType)
                const coords = [container.locationLong, container.locationLat]
                const marker = new mapboxgl.Marker({color: color})
    
                marker.setLngLat(coords).addTo(map.current)
                markers.set(container.id, {marker: marker, container: container})
                
            }
            )
        })
      },[])

    useEffect(() => {

        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        });
    return (
        
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default BoxMap