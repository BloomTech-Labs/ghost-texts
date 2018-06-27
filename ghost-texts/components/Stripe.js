import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

export default class StripeForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FormLabel>CC</FormLabel>
        <FormInput placeholder="CC" placeholderTextColor="gray" />
        <View style={styles.cc}>
          <View style={{ flex: 1 }}>
            <FormInput placeholder="month" inputStyle={number} placeholderTextColor="gray" />
          </View>
          <View style={{ flex: 1 }}>
            <FormInput placeholder="year" placeholderTextColor="gray" />
          </View>
          <View style={{ flex: 2 }}>
            <FormInput
              style={{ flex: 1 }}
              placeholder="zip"
              placeholderTextColor="gray"
            />
          </View>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
