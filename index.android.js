/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

export default class PlatziMusic extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.red]}></View>
        <View style={[styles.box, styles.blue]}></View>
        <View style={[styles.box, styles.green]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'black'
  },
  red: {
    backgroundColor: 'red'
  },
  blue: {
    backgroundColor: 'blue'
  },
  green: {
    backgroundColor: 'green'
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
