import React from "react";
import GoogleMapReact from "google-map-react"
import MapMarker from "./Marker";

/***
 * This component uses project https://github.com/google-map-react/google-map-react
 */
const GoogleMapReactComponent = (props : any) : React.ReactElement => {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
    return(
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "API-Key" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker>
          
        </MapMarker>
      </GoogleMapReact>
    </div>
    )
}

export default GoogleMapReactComponent;