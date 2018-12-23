import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import React, { Component } from 'react';



class Map extends Component {
    
    
  

   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        // Edinburgh lat and lng
        defaultCenter = { { lat: 55.953, lng: -3.188 } }
        defaultZoom = { 13 }
      >

      {this.props.markers && this.props.markers.map((marker,index) => (
        <Marker 
          // if state.isBounce is set to to true marker will start bouncing
          animation={marker.isBounce ? window.google.maps.Animation.BOUNCE : null}
          key={index} position={{lat: marker.lat, lng: marker.lng}}
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

      </GoogleMap>
      
      

      
      
   ));
  
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          >
          
          
          </GoogleMapExample>
          

        
      </div>
   );
   }
};
export default Map;

