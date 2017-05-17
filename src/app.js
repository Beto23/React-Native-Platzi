import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import LoginView from './LoginView';
import HomeView from './HomeView';
import ArtistDetailView from './ArtistDetailView';

export default class PlatziMusic extends Component {
  render() {
    const isAndroid = Platform.OS === 'android';

    return <Router>
      <Scene key="login" component={LoginView} hideNavBar/>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar/>
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={isAndroid}/>        
      </Scene>
    </Router>
  }
}
AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
