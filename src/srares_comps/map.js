import React, { useEffect } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

function MapApp(props)
{  
  return(
      <Map center={[props.latlng[0], props.latlng[1]]} zoom={7}>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[props.latlng[0], props.latlng[1]]}
            />
    </Map>
  )
}

export default MapApp


//npm install leaflet  
// npm install react-leaflet 