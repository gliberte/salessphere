'use client';
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styled from 'styled-components'

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2xpYmVydGUiLCJhIjoiY2x4eW9wczRqMDJ5djJxcTc1bHZnbXZweCJ9.HUgUC9N9_xt_dvdD_NbrXQ";

  const LayoutMap = styled.div`
  border: 1px solid black;

  position: relative;
`;
const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;
  

export {LayoutMap,MapContainer,mapboxgl}