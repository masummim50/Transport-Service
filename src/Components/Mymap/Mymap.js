import React, { useEffect } from 'react';
import mapboxgl from "mapbox-gl";

const Mymap = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFzdW1taW01MCIsImEiOiJja21nbXNwcjcxaGhhMndraGg3Ynl0ZjVhIn0.C5CE8FhzX6fhBXN1YwXdhA';

  useEffect(() => {
    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
  }, []);
  return (
    <div style={{height:'300px'}} id="mapContainer">
      
    </div>
  );
};

export default Mymap;