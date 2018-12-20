import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'
class App extends Component {
  constructor(){
    super();

  this.state = {
    places: [], //foursquere places
    //marker: name, id, location, isShow:false, isOpen:true
    /* ustawic w marker.isShow& i co ma robic dla pokazanych markerow
    i marker.isOpen && jezeli chcemy zeby po kliknieciu bylo wyswietlna
    funcja on click zeby zmienic stane isOpen z false na true*/
    markers: [],
    searchQuery: ''
  };
  
  }
 

  openInfoWindow = (marker)=> {
    // close all infowindow's markers
    this.state.markers.map(marker => {
      marker.isOpen = false;
      this.setState({markers: Object.assign(this.state.markers, marker)})
    }
      
    )
    //open infowindow on click marker
    marker.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers, marker)})

}

// this function update state.searchQuery when user is typing inside input
updateSearch(event){
  this.setState({searchQuery: event.target.value.substr(0,20)});
  console.log(this.state.searchQuery);
}



  componentDidMount() {
    this.getPlaces();
    
  }

  // code base on code from https://developer.foursquare.com/docs/api
  getPlaces = () => {
    // get 20 places from Edinburghls
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

        const markers = data.response.groups[0].items.map( marker => {
          return {
            id: marker.venue.id,
            name: marker.venue.name,
            lat: marker.venue.location.lat,
            lng: marker.venue.location.lng,
            address: marker.venue.location.address,
            isShow: true,
            isOpen: false
          }
        })
        this.setState({places, markers});

        


    }).catch(
      err => console.log('Error', err)
    );
    
    
      }


      
  render() {
    let filteredMarkers = this.state.markers.filter(
      (marker) => {
        
        return marker.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1;
      }
    );
    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Edinburgh</h1>
        </header>

        <main className="Main">
          <nav className="App-nav">
          Search:
          <input type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
          
          List of Places:
          <ul>
          {/*show places on list and map with isShow true*/}
          {/* */}
          {filteredMarkers.filter(marker => (marker.isShow === true)).map(marker=>{
            return <li key={marker.id}><button onClick={() => this.openInfoWindow(marker)}>{marker.name}</button></li>
          })}
          </ul>
          </nav>
          <section className="App-map">
            <Map
              {...this.state}
              places={this.state.places}
              openInfoWindow={this.openInfoWindow}
              markers={filteredMarkers}
            />
          </section>
        </main>
        
        <footer className="App-footer">this is part of Nanodegree Project</footer>
        
      </div>
    );
  }
}
export default App;