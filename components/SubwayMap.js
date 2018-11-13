import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import axios from 'axios';

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

  componentDidMount(){
    //   const MTA_API = process.env.mta_api;
      const MTA_API = 'dd0969df85e7f93e712dfb212544f3d9';
    console.log('hello')

      // api call to mta using isomorphic fetch
      let getData = (req, res, next) => {
          axios.get(`http://datamine.mta.info/mta_esi.php?key=${MTA_API}&feed_id=${req.body.field_id}`)
              .then(fetchRes => {
                  // console.log(fetchRes.body);
                  var feed = GtfsRealtimeBindings.FeedMessage.decode(fetchRes.body);
                  feed.entity.forEach(function (entity) {
                      if (entity.trip_update) {
                          console.log(entity.trip_update);
                      }
                  });
                  console.log(feed);
                  next();
              }).then(jsonRes => {
                  res.locals.mta = jsonRes;
                  next();
              }).catch(err => {
                  console.log(err);
              })
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
