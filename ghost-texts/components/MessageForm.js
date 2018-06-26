import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage,
} from 'react-native-elements';
import { sendMessage } from '../actions/actions';
import { connect } from 'react-redux';
import Payment from './Stripe/index'

class MessageForm extends React.Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Recipient</FormLabel>
        <FormInput placeholder="Phone" placeholderTextColor="gray" />
        <FormLabel>Message</FormLabel>
        <FormInput placeholder="Message" placeholderTextColor="gray" />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        <Payment/>
        <Button title="Send Message" style={styles.button} large/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#7892F6',
    borderRadius: 5,
    overflow: 'hidden'
  },
});

const mapStateToProps = state => {
  let { isGettingMessages } = state;
  return {
    // isSendingMessage
  };
};


export default connect(
  mapStateToProps,
  { sendMessage }
)(MessageForm);
