import React from "react";
import MapGL, {Source, Layer} from 'react-map-gl';
import {useState, useEffect, useMemo} from 'react';
import {heatmapLayer} from '../util/map-style';
import { generateRijekaCoords } from "../util/coords";

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
   
   

   useEffect(() => {
      fetch('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson')
      .then(resp => resp.json())
      .then(json => {
      const features = json.features;
      const endTime = features[0].properties.time;
      const startTime = features[features.length - 1].properties.time;

      let featuresCopy = features.map(feature => {
      feature.geometry.coordinates = generateRijekaCoords();
   
      return feature;
      })
      let jsonCopy = json
      jsonCopy.features = featuresCopy.slice(0, 40)
      setTimeRange([startTime, endTime]);
      setEarthQuakes(jsonCopy);
      selectTime(endTime);
      })
      .catch(err => console.error('Could not load data', err)); // eslint-disable-line
   }, []);

   const data = useMemo(() => {
      return allDays ? earthquakes : filterFeaturesByDay(earthquakes, selectedTime);
   }, [earthquakes, allDays, selectedTime]);

   return(
      <MapGL
        initialViewState={{
          longitude: 14.44,
          latitude: 45.33,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{height:"75vh", width:"75vw"}}
      >
        {data && (
          <Source type="geojson" data={data}>
            <Layer {...heatmapLayer} />
          </Source>
        )}
      </MapGL>
   )
}

export default HeatMap;