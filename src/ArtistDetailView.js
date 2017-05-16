import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform
} from 'react-native';

import ArtistBox from './ArtistBox';
import { getArtists } from './api-client';

export default class ArtistDetailView extends Component {


  render() {

    const isAndroid = Platform.OS === 'android';
    const artist = this.props.artist;

    return (
      <View style={[styles.container, isAndroid ? styles.androidPadding : styles.IosPadding]}>
        <ArtistBox artist={artist}  />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  androidPadding: {
    paddingTop: 20
  },
  IosPadding: {
    paddingTop: 70
  }
});