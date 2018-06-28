import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { chooseLoader } from '../actions/loader';

class Loader extends Component {
  render() {
    return <View>{chooseLoader(this.props.loadStatus)}</View>;
  }
}

const mapStateToProps = state => {
  let { loadStatus } = state;
  return {
    loadStatus
  };
};

export default connect(mapStateToProps)(Loader);
