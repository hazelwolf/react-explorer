import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

/**
 * This map component uses https://github.com/JustFly1984/react-google-maps-api
 * switched to this one cause of multiple functionalities available out of the box
 * @param props
 * @returns 
 */
const GoogleMapReactAPIComponent = (props:any) : React.ReactElement =>{
    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
      const center = {
        lat: 10.99835602,
        lng: 77.01502627
      };

      const handleDragEnd = (event  : any) =>{
        console.log( event.latLng.lat());
        console.log( event.latLng.lng());
      }

    return(
        <LoadScript
        googleMapsApiKey="API-Key"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker 
          position={center}
          draggable = {true}
          onDragEnd={handleDragEnd}
          />
        </GoogleMap>
      </LoadScript>
    )
}

export default React.memo(GoogleMapReactAPIComponent);