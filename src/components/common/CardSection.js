import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => {
  return (
    <View style={styles.containerStyle}>
      {children}  
    </View>
  );
};

export default CardSection;

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',

    justifyContent: 'flex-start',
    flexDirection: 'row', // allows justifyContent to distribute horizontally
    
    borderColor: '#ddd',
    position: 'relative'
  }
};
