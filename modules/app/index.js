import React from 'react';
import { dva } from '@modules/core';
import { StyleSheet, Text, View } from 'react-native';

import state from './state';
import features from './features';

let states = [state];
features.forEach(feature => {
  if (feature.state) {
    states.push(feature.state);
  }
});

const app = dva({
  initialState: {},
  models: states,
  onError(e, dispatch) {
    if (__DEV__) {
      console.log('onError', e);
    }
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default app.start(
  <View style={styles.container}>
    <Text>hello world</Text>
  </View>
);
