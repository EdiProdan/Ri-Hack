import React from 'react'
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { mapTrashType } from '../util/mapTrashType';

mapboxgl.accessToken = 'pk.eyJ1IjoiYm9qYW5wdXZhY2EiLCJhIjoiY2w1eHIydmpoMHdndzNibnBuOHA0OWtzcSJ9.9EKcXB_wGL918f5HDKd2mA';

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(14.457664);//45.328979
    const [lat, setLat] = useState(45.328979);    
    const [zoom, setZoom] = useState(12);
    const [clickedMarkerCoords, setClickedMarkerCoords] = useState([0,0])
 
    let trashContainers = {}

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
            trashContainers = json
            trashContainers.forEach((container) => {
                const {color, textCro} = mapTrashType(container.trashType)
                const coords = [container.locationLong, container.locationLat]
                const marker = new mapboxgl.Marker({color: color})
    
                marker.setLngLat(coords).addTo(map.current)
                
    
                const onClick = () => {
                    setClickedMarkerCoords(coords) 
                } 
    
                marker.getElement().addEventListener('click', onClick)
                var popup = new mapboxgl.Popup({offset: 30})
                                        .setHTML(`
                                            <div style="display: flex; flex-direction: column; align-items: center">
                                                <p >Vrsta kontejnera: ${textCro}</p>
                                                <button style="color:green"><h4>Označi kontejner kao pun </h5></button>
                                            </div>
                                            `)
                marker.setPopup(popup)
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

export default Map