import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class LocateSubwayButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  openMap = () => {
      this.props.locate();
  }

  render() {
    return (
      <TouchableOpacity style={styles.buttonStyle}
                        onPress={this.openMap}>
        <Text style={styles.textStyle}> LocateSubwayButton </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 10,
        backgroundColor: '#202646',
        borderRadius: 5,
    },
    textStyle: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
    }
});
