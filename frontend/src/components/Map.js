import React from 'react'
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZWRpcHJvZGFuIiwiYSI6ImNsNXhwZzFmbDA2YWMzYnAyam14MXlsZWsifQ.pYEjpN5JomScSmpAU_YAiQ';

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(14.457664);//45.328979
    const [lat, setLat] = useState(45.328979);    
    const [zoom, setZoom] = useState(12);


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