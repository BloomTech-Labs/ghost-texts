import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

export default class StripeForm extends Component {
  render() {
    return (
      <View>
        <FormLabel>CC</FormLabel>
        <FormInput placeholder="CC" placeholderTextColor="gray" />
        <View style={styles.cc}>
          <FormInput
            style={{width: 50}}
            placeholder="month"
            placeholderTextColor="gray"
          />
          <FormInput

            placeholder="year"
            placeholderTextColor="gray"
          />
          <FormInput
            style={{ flex: 1 }}
            placeholder="zip"
            placeholderTextColor="gray"
          />
        </View>
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
  cc: {

    flexDirection: 'row',
  },
});
