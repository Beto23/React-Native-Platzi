import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import ArtistBox from './ArtistBox';
import { getArtists } from './api-client';

import Icon from 'react-native-vector-icons/Ionicons'
import { firebaseDataBase, firebaseAuth } from './firebase';


export default class ArtistDetailView extends Component {


  handleSend = () => {
    const { text } = this.state;
    const artistCommentsRef = this.getArtistCommentsRef();
    var newCommentRef = artistCommentsRef.push();
    newCommentRef.set({text});
  }

  getArtistCommentsRef = () => {
      const { id } = this.props.artist;
      return firebaseDataBase.ref(`'comments/'${id}`);
  }

  handleChangueText = (text) => {
    this.setState({text});
  }

  render() {

    const isAndroid = Platform.OS === 'android';
    const artist = this.props.artist;

    return (
      <View style={[styles.container, isAndroid ? styles.androidPadding : styles.IosPadding]}>
        <ArtistBox artist={artist}  />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Opina sobre este artista"
            onChangeText={this.handleChangueText}
          />
          <TouchableOpacity onPress={this.handleSend}>
            <Icon name={isAndroid ? 'md-send' : 'ios-send-outline'} size={30} color="#bdc3c7" />
          </TouchableOpacity>
        </View> 
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    position: 'relative',
  },
  androidPadding: {
    paddingTop: 20
  },
  IosPadding: {
    paddingTop: 70
  },
  inputContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 50
  }
});