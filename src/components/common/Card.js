import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => {
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
};

export default Card;

const styles = {
  containerStyle: {

    borderWidth: 1,
    borderRadius: 2, // round the edges of your border
    borderColor: '#ddd',
    borderBottomWidth: 0, // hide bottom border

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 1,

    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};