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
    const [clickedMarkerCoords, setClickedMarkerCoords] = useState([0,0])

    const markerCoords = [
            [14.442726, 45.326077],
            [14.452726, 45.336077],
            [14.422726, 45.336077],
    ]
<<<<<<< HEAD
    
    useEffect(()=>{
        console.log(clickedMarkerCoords)
    },[clickedMarkerCoords])
=======
    useEffect(() => {
        fetch("http://localhost:8080/api/trash-containers", {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin':'*'
            }
          })
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(json => console.log(json))
      },[])
>>>>>>> c1702eb0f972151edcfbc3b0b34954bda9e32496

    useEffect(() => {


        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        markerCoords.forEach((coords) => {
            const marker = new mapboxgl.Marker({color: "green"})

            marker.setLngLat(coords).addTo(map.current)
            

            const onClick = () => {
                setClickedMarkerCoords(coords) 
            } 

            marker.getElement().addEventListener('click', onClick)
            var popup = new mapboxgl.Popup({offset: 30})
                                    .setHTML("<button> Označi  </button>")
            marker.setPopup(popup)
        }
        )});
    return (
        
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default Map