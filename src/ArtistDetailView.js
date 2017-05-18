import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

import ArtistBox from './ArtistBox';
import CommentList from './CommentList'

import { getArtists } from './api-client';

import Icon from 'react-native-vector-icons/Ionicons'
import { firebaseDataBase, firebaseAuth } from './firebase';


export default class ArtistDetailView extends Component {

  state = {
    comments: [],
    commentsCount: 0
  }

  componentDidMount() {
    this.getArtistCommentsRef().on('child_added', this.addComment );
  }

  componentWillUnmount() {
    this.getArtistCommentsRef().off('child_added', this.addComment );
  }

  addComment = (data) => {
    const comment = data.val();
    if(comment) {
      this.setState({
        comments: this.state.comments.concat(comment),
        commentsCount: this.state.comments.length+1
      })
    }
  }

  handleSend = () => {
    const { text } = this.state;
    const artistCommentsRef = this.getArtistCommentsRef();
    var newCommentRef = artistCommentsRef.push();
    newCommentRef.set({text});
    this.setState({text: ''})
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
    const { comments, commentsCount } = this.state;

    return (
      <View style={[styles.container, isAndroid ? styles.androidPadding : styles.IosPadding]}>
        <ArtistBox artist={artist} commentsCount={commentsCount}  />
        <Text style={styles.header}>Comentarios</Text>
        <CommentList comments={comments} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.text}
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
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 50
  },
  header: {
    fontSize: 20,
    paddingHorizontal: 15,
    marginVertical: 10
  }
});