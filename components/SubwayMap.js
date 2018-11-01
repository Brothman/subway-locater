import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

const { Marker } = MapView;
 

export default class SubwayMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
        markers: [
            {
                id: 1,
                title: 'Twin Lakes Hidden Spot',
                description: 'Beautiful view of Twin Lakes off this hidden forest road.',
                coordinate: {
                    longitude: -106.391015,
                    latitude: 39.085855
                }
            },
            {
                id: 2,
                title: 'Lily Lake',
                description: 'Nice view of the lilypads in this secluded spot, but a pretty tough road to reach it.',
                coordinate: {
                    longitude: -122.4324,
                    latitude: 37.78825
                }
            },
            {
                id: 3,
                title: 'Slide Lake',
                description: 'Pretty riverside camping, but a REALLY nasty road to get there.',
                coordinate: {
                    longitude: -106.389204,
                    latitude: 39.372171
                }
            },
        ],
    }
  }

  renderMarkers = () => {
      return this.state.markers.map(marker => (
          <Marker
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              key={marker.id}
          />
      ))
  }
  
  render() {
    return (
      <MapView
              style={{ flex: 1, height: 400, width: 400}}
              provider="google"
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
       >

           {this.renderMarkers()}

      </MapView>
    );
  }
}
