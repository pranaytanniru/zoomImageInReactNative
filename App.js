/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import PhotoView from 'react-native-photo-view';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <PhotoView
          source={{uri: 'https://media.alienwarearena.com/media/link-7.png'}}
          onLoad={() => console.log("onLoad called")}
          onTap={() => console.log("onTap called")}
          minimumZoomScale={1}
          maximumZoomScale={3}
          androidScaleType="center"
          style={styles.photo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  photo: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    backgroundColor: "transparent",
    color: "#FFF",
  }
});
