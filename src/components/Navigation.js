import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="nav" role="navigation">
                <input type="text" className="input" title="Filter Places"
                    value={this.props.searchQuery}
                    onChange={this.props.updateSearch}
                    placeholder="filter places"
                />
                
                <ul className="button-list">
                {/*show places on list and map with isShow true*/}
                {/* */}
                {this.props.markers.filter(marker => (marker.isShow === true)).map(marker=>{
                    return <li key={marker.id}><button onClick={() => this.props.openInfoWindow(marker)} ><b>{marker.name}</b></button></li>
                })}
                </ul>
          </nav>
        )
    }
}
export default Navigation;