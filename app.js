import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import ArtistBox from './ArtistBox';

import Icon from 'react-native-vector-icons/Ionicons';

export default class PlatziMusic extends Component {


  render() {

      const artist = {
        image: 'http://mxcdn02.mundotkm.com/2015/11/Paty-1.jpg',
        name: 'Paty Cantu',
        likes: 2000,
        comments: 140,
      }

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
