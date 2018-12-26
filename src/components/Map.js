import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import React, { Component } from 'react';

class Map extends Component {
   render() {
   const MyGoogleMap = withGoogleMap(props => (
      <GoogleMap
        // Edinburgh lat and lng
        defaultCenter = { { lat: 55.953, lng: -3.188 } }
        defaultZoom = { 13 }
      >
      {/* if markers exists map over the markers and create marker with infowindow*/}
      {this.props.markers && this.props.markers.map((marker,index) => (
        <Marker 
          // if marker state isBounce is true then marker will bounce
          animation={marker.isBounce ? window.google.maps.Animation.BOUNCE : null}
          key={index} position={{lat: marker.lat, lng: marker.lng}}
          // click on marker change state isOpen to true and open infowindow
          onClick={() => this.props.openInfoWindow(marker)} 
        >
          {marker.isOpen && 
            <InfoWindow key={marker.id}>
              <div className="info-window">
                <p><b>{marker.name}</b></p>
                <p></p>
                <p>Address:</p>
                <p>{marker.address}</p>
                <p>{marker.city}</p>
                <p>{marker.postalCode}</p>
              </div>
            </InfoWindow>}
        </Marker>
        ))}
        </GoogleMap>));
  
   return(
      <div>
        <MyGoogleMap
          containerElement={ <div style={{ height: '500px', width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          >
          </MyGoogleMap>        
      </div>
   )
   }
}
export default Map;