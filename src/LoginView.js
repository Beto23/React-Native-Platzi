import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import FBSDK, {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

export default class LoginView extends Component {


  handleLoginFinished = (error, result) => {
    if (error) {
      console.error(error)
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {
        AccessToken.getCurrentAccessToken().then( () => {
          Actions.root();
        })
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a PlatziMusic</Text>
        <LoginButton
                  readPermissions={["public_profile", 'email']}
                  onLoginFinished={this.handleLoginFinished}
                  onLogoutFinished={() => alert("logout.")}/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20
  }
});