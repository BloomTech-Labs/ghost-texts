import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, Animated } from 'react-native';
import { connect } from 'react-redux';
class Loader extends Component {

  chooseLoader = () => {
    console.log(this.props)
    if(this.props.loadConfirm) {
      return (
        <Image
        style={{
          flex: 1,
          width: 100,
          height: 100,
        }}
        source={require('../images/completed.png')}
        resizeMode="contain"
      />
      )
    } else if (this.props.loadError) {
      return (
        <Image
        style={{
          flex: 1,
          width: 100,
          height: 100,
        }}
        source={require('../images/error.png')}
        resizeMode="contain"
      />
      );
    } else {
      return (
        <Animated.Image
        style={{
          flex: 1,
          width: 100,
          height: 100,
        }}
        source={require('../images/loader.png')}
        resizeMode="contain"
      />
      );
    }
  }

  render() {
    let loader = this.chooseLoader();
    return (
      <View style={styles.container}>
      {loader}
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

const mapStateToProps = state => {
  let { loadConfirm, loadError } = state;
  return {
    loadConfirm,
    loadError,
  };
};

export default connect(
  mapStateToProps
)(Loader);
