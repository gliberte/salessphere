"use client";

import { useEffect, useRef, useState } from "react";
import {MapContainer,mapboxgl} from '../../mapbox.js'
import Titulo from './Titulo.js'


export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-79.504571);
  const [lat, setLat] = useState(9.034881);
  const [zoom, setZoom] = useState(1);

  function setMap() {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      projection: "globe",
      style: "mapbox://styles/gliberte/cjlds6k0120cv2qqhmqyja3ki",
      center: [-23.02, 24.23],
      zoom: zoom,
    });
  }

  function setAtmosphericStyle() {
    map.current.on("style.load", () => {
      map.current.setFog({
        color: "rgb(186, 210, 235)", // Lower atmosphere
        "high-color": "rgb(36, 92, 223)", // Upper atmosphere
        "horizon-blend": 0.02, // Atmosphere thickness (default 0.2 at low zooms)
        "space-color": "rgb(11, 11, 25)", // Background color
        "star-intensity": 0.6, // Background star brightness (default 0.35 at low zoooms )
      });
    });
  }

  useEffect(() => {
    setMap();
    return () => {};
  }, []);
  useEffect(() => {
    setAtmosphericStyle();
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.flyTo({
      zoom: 8,
      center: [lng, lat],
      speed: 0.4,
    });
  });
  return (
    
    <MapContainer ref={mapContainer}>
        <Titulo></Titulo>
    </MapContainer>
  );
}
