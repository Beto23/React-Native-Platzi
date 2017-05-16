import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import ArtistList from './ArtistList';

export default class PlatziMusic extends Component {

  render() {
    const artist = {
      image: 'http://mxcdn02.mundotkm.com/2015/11/Paty-1.jpg',
      name: 'Paty Cantu',
      likes: 2000,
      comments: 140,
    }
    const artists = Array(500).fill(artist);
    return (
      <View style={styles.container}>
        <ArtistList artists={artists}  />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 20
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
