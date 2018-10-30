import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

export default class SubwayMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
      console.log(process.env.REACT_APP_GOOGLE_BOOKS_API_KEY)
      console.log(process.env.EXPO_APP_GOOGLE_BOOKS_API_KEY)
      

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
      />
    );
  }
}
