import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'
class App extends Component {

  state = {
    places: []
  }

  componentDidMount() {
    this.getPlaces()
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
        this.setState({
          places: data.response.groups[0].items
        });
        console.log('this.state.places:',this.state.places)

    }).catch(
      err => console.log('Error', err)
    );
    
}
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Edinburgh</h1>
        </header>

        <main className="Main">
          <nav className="App-nav">
          
          List of Places:
          {this.state.places.map(place=>{
            return <li>{place.venue.name}</li>
          })}
          
          </nav>
          <section className="App-map">
            <Map
              places={this.state.places}
            />
          </section>
        </main>
        
        <footer className="App-footer">this is part of Nanodegree Project</footer>
        
      </div>
    );
  }
}
export default App;