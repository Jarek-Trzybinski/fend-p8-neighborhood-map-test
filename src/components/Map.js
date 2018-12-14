import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
class Map extends Component {
    
    
  

   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        // Edinburgh lat and lng
        defaultCenter = { { lat: 55.953, lng: -3.188 } }
        defaultZoom = { 13 }
      >
      {markers}
      </GoogleMap>
   ));
   console.log('map.js this.props.place', this.props.places);

    const markers = this.props.places.map((place)=> {
      const  marker = {
        position: {
          lat: place.venue.location.lat,
          lng: place.venue.location.lng
        }
        

      }
      return <Marker key={place.venue.id} {...marker} />
    })
    console.log("markers", markers)

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