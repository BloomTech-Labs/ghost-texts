import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import Messages from './Messages';

export const MessageFeed = () => (
  <View style={styles.container}>
    <Button title='Send Your Own Message Now'/>
    <Messages />
  </View>
);
export const SendMessage = () => (
  <View style={styles.container}>
    <Messages />
  </View>
);
const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
