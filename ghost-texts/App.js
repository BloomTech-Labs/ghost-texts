import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Messages from './components/Messages';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Messages />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
