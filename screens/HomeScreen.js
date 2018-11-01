import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';

import SubwayMap from '../components/SubwayMap.js';
import LocateSubwayButton from '../components/LocateSubwayButton.js';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locating: false,
    };
  }
  static navigationOptions = {
    header: null,
  };

  locate = () => {
    this.setState({ locating: true });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView contentContainerStyle={{ justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
          {this.state.locating ? <SubwayMap /> : 
          <View style={{flex: 1}}>
            <LocateSubwayButton locate={this.locate} />
          </View>
            }
        </ScrollView>
       </SafeAreaView>
    );
  }
};

