import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, View, Text } from 'react-native';

export default class Loader extends Component {
  // imageWidth = () => {
  //   return Math.round(Dimensions.get('window').width);
  // };
  render() {
    return (
      <View style={styles.container}>
      <Image
        style={{
          flex: 1,
        }}
        source={require('../images/loader.png')}
        resizeMode="contain"
      />
      <Text style={{color: 'white'}}>Sending Message</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height:200,
    width:175,
    backgroundColor: 'rgba(0, 0, 0, .75)',
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
