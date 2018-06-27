import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage,
} from 'react-native-elements';
import { sendMessage, getToken } from '../actions/actions';
import { connect } from 'react-redux';
import StripeForm from './Stripe';

class MessageForm extends React.Component {
  state = {
    token: this.props.currToken,
  }
  createToken = () => {
    this.props.getToken();
  }
  sendMessage = () => {
    this.props.sendMessage(this.state);
    this.setState({
      
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.currToken}</Text>
        <FormLabel>Recipient</FormLabel>
        <FormInput placeholder="Phone" placeholderTextColor="gray" />
        <FormLabel>Message</FormLabel>
        <FormInput placeholder="Message" placeholderTextColor="gray" />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        <StripeForm />
        <Button title="Send Message" style={styles.button} large onPress={this.createToken}/>
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
  let { currToken, tokenCreated } = state;
  return {
    currToken,
    tokenCreated
  };
};


export default connect(
  mapStateToProps,
  { sendMessage, getToken }
)(MessageForm);
