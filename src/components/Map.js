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
        <Marker key={index} position={{lat: marker.lat, lng: marker.lng}} onClick={() => this.props.openInfoWindow(marker)} >
          {marker.isOpen && <InfoWindow key={marker.id}><div><p>{marker.name}</p><p>Address:</p><p>{marker.address}</p></div></InfoWindow>}
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

