import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import Message from './Message';
import { getMessages } from '../actions/actions';

export default class Messages extends React.PureComponent {
  state = {
    messages: [
      {
        body: 'heres a message',
        id: '0',
      },
      {
        body: 'another message',
        id: '1',
      },
    ],
  };

  _keyExtractor = message => {
    return message.id;
  };

  render() {
    return (
      <FlatList
        data={this.state.messages}
        renderItem={({ item }) => (
          <Message body={item.body} />
        )}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'stretch',
  },
});
