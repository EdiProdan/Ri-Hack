import React from 'react'
import Map from 'react-map-gl';
const HeatZone = () => {
  return (
    <>
        <h2>Heat zones: </h2>
        <Map
          initialViewState={{
          longitude: 14.44,
          latitude: 45.33,
          zoom: 12
          }}
          style={{width: "maxContent", height:"40vh", borderRadius: "20px", marginBottom:"80px", boxShadow: "0px 0px 40px -15px rgba(0,0,0,0.31)"}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoiYm9qYW5wdXZhY2EiLCJhIjoiY2w1eHIydmpoMHdndzNibnBuOHA0OWtzcSJ9.9EKcXB_wGL918f5HDKd2mA"
        />
    </>
  )
}

export default HeatZone