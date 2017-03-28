import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, animated }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size || 'large'} animated={animated} />
  </View>
);

export default Spinner;

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
