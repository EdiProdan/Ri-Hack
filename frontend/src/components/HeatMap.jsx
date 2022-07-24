import React from "react";
import MapGL, {Source, Layer, Marker} from 'react-map-gl';
import {useState, useEffect, useMemo} from 'react';
import {heatmapLayer} from '../util/map-style';
import { generateRijekaCoords } from "../util/coords";
import coords from './coordinates.json'
import { mapTrashType } from "../util/mapTrashType";

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYm9qYW5wdXZhY2EiLCJhIjoiY2w1eHIydmpoMHdndzNibnBuOHA0OWtzcSJ9.9EKcXB_wGL918f5HDKd2mA'; // Set your mapbox token here

function filterFeaturesByDay(featureCollection, time) {
   const date = new Date(time);
   const year = date.getFullYear();
   const month = date.getMonth();
   const day = date.getDate();
   const features = featureCollection.features.filter(feature => {
     const featureDate = new Date(feature.properties.time);
     return (
       featureDate.getFullYear() === year &&
       featureDate.getMonth() === month &&
       featureDate.getDate() === day
     );
   });
   return {type: 'FeatureCollection', features};
 }

const HeatMap = ()=>{
   const [allDays, useAllDays] = useState(true);
   const [timeRange, setTimeRange] = useState([0, 0]);
   const [selectedTime, selectTime] = useState(0);
   const [earthquakes, setEarthQuakes] = useState(null);
   const [show, setShow] = useState(false);
   let [containers, setContainers] = useState([])

   const handleClick= ()=>{
      setShow(!show)
   }

   useEffect(() => {
      fetch('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson')
      .then(resp => resp.json())
      .then(json => {
      const features = json.features;
      const endTime = features[0].properties.time;
      const startTime = features[features.length - 1].properties.time;

      let jsonCopy = json
      jsonCopy.features = coords.features

      setTimeRange([startTime, endTime]);
      setEarthQuakes(jsonCopy);
      selectTime(endTime);
      })
      .catch(err => console.error('Could not load data', err)); // eslint-disable-line

      fetch("http://localhost:8080/api/trash-containers", {
              mode: 'cors',
              headers: {
                'Access-Control-Allow-Origin':'*'
              }
            })
          .then(response => response.json())
          .then(json => setContainers(json))
   }, []);

   const data = useMemo(() => {
      return allDays ? earthquakes : filterFeaturesByDay(earthquakes, selectedTime);
   }, [earthquakes, allDays, selectedTime]);



   return(
      <MapGL
        initialViewState={{
          longitude: 14.44,
          latitude: 45.33,
          zoom: 10,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{height:"45vh", width: "100%", marginTop:"0px", marginBottom:"3vh", position:"relative"}}
      >
        {data && (
          <Source type="geojson" data={data}>
            <Layer {...heatmapLayer} />
          </Source>
        )}
        {show && containers.map((container) =>
              <Marker longitude={container.locationLong}
                latitude={container.locationLat}
                anchor="bottom"
                key={container.id}
                color={mapTrashType(container.trashType).color}
                onClick = {(e) => {
                  e.originalEvent.stopPropagation()
                  }}
               />
            )}
            <button style={{position:"absolute", top:"10px", right:"10px", backgroundColor:"green", color: "white", padding:"5px"}} onClick={handleClick}> Toggleaj pinove </button>
      </MapGL>
   )
}

export default HeatMap;