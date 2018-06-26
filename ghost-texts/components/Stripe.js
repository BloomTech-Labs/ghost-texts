import React, { Component } from 'react';
import { View } from 'react-native';
import stripe from 'tipsi-stripe';

stripe.init({
  publishableKey: 	
  'pk_test_N3kloqdrQMet0yDqnXGzsxR0',
});

const theme = {
  primaryBackgroundColor: '#fff',
  secondaryBackgroundColor: gray,
  primaryForegroundColor: '#7892F6',
  secondaryForegroundColor: '#7892F6',
  accentColor: yellow,
  errorColor: red
};

class NewCardPage extends Component {
  componentDidMount() {
    
    const options = {
      smsAutofillDisabled: true,
      requiredBillingAddressFields: 'zip', // or 'full'
      theme
    };
    stripe.paymentRequestWithCardForm(options)
      .then(response => {
        // Get the token from the response, and send to your server
      })
      .catch(error => {
        // Handle error
      });
  }
  render() {
    return <View />
  }
}