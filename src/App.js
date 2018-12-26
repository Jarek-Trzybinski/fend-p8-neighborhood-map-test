import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
import Navigation from './components/Navigation.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      places: [], //foursquere places
      markers: [],
      searchQuery: ''
    };
  }
 
  openInfoWindow = (marker)=> {
    // close all infowindow's markers
    this.state.markers.map(marker => {
      marker.isOpen = false;
      // set all marker animation to null
      marker.isBounce = false;
      this.setState({markers: Object.assign(this.state.markers, marker)});
    })

    //open infowindow on click marker
    marker.isOpen = true;
    // make click marker bounce
    marker.isBounce = true;
    this.setState({markers: Object.assign(this.state.markers, marker)});
  }

  // this function update state.searchQuery when user is typing inside input
  updateSearch(event){
    this.setState({searchQuery: event.target.value.substr(0,20)});
    console.log("[This.state.searchQuery]:", this.state.searchQuery);
  }

  componentDidMount() {
    this.getPlaces();
  }

  // code base on code from https://developer.foursquare.com/docs/api
  getPlaces = () => {
    // get 20 places from Edinburgh
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=OGJ2WWKTOHB0PARLTNR4WTUBLSETYALE10WNXGTL33P2BNAW&client_secret=4LB1EELLF4CDIOSBLJMALSBORN0XAGO22CXYTH0KFJES3UTF&v=20180323&limit=20&near=Edinburgh&query=top+picks')
    .then(
      // save as json format
      resp => resp.json()
    )
    .then((data) => {
        console.log(data);
        // pass data into state
        
        console.log('this.state.places:',this.state.places)
        const places = data.response.groups[0].items;

        const markers = places.map( marker => {
          return {
            id: marker.venue.id,
            name: marker.venue.name,
            lat: marker.venue.location.lat,
            lng: marker.venue.location.lng,
            address: marker.venue.location.address,
            postalCode: marker.venue.location.postalCode,
            city: marker.venue.location.city,
            isShow: true,
            isOpen: false,
            isBounce: false
          }
        })
        this.setState({places, markers});
    }).catch(
      err => console.log('Error', err)
    );   
  }
     
  render() {
    // create array of filtered arrays of markers
    let filteredMarkers = this.state.markers.filter(
      (marker) => {        
        return marker.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1;
      }
    );
    return (
      <div className="app">
        <header className="header">
          <h1 className="app-title">Explore Edinburgh APP</h1>
        </header>

        <main className="main">
        <Navigation 
        markers={filteredMarkers}
        searchQuery={this.state.searchQuery}
        updateSearch={this.updateSearch.bind(this)}
        openInfoWindow={this.openInfoWindow}
        />
          <section className="map">
            <Map
              places={this.state.places}
              openInfoWindow={this.openInfoWindow}
              markers={filteredMarkers}
            />
          </section>
        </main>
        
        <footer className="footer">FEND Project 8 Neighborhood Map by Jaroslaw Trzybinski</footer>
        
      </div>
    );
  }
}
export default App;