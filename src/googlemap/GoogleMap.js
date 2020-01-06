import React, { Component } from 'react';

// examples:
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Map google={this.props.google} zoom={10}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/*<div>*/}
                    {/*    <h1>{this.state.selectedPlace.name}</h1>*/}
                    {/*</div>*/}
                </InfoWindow>
            </Map>
        );
    }
}

require('dotenv').config()
console.log('google_map_api', process.env.REACT_GOOGLE_MAP_API_KEY)
export default GoogleApiWrapper({
    apiKey: (process.env.REACT_GOOGLE_MAP_API_KEY)
})(GoogleMap)

