import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Messages from './Messages';
import MessageForm from './MessageForm';

export const MessageFeed = () => (
  <View style={styles.container}>
      <Messages />
  </View>
);
export const SendMessage = () => (
  <View style={styles.container}>
      <MessageForm />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  screen: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  const { creatingToken } = state;
  return {
    creatingToken,
  };
};

export default connect(mapStateToProps)(MessageFeed, SendMessage);
