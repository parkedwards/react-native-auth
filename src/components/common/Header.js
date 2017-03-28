import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const Header = ({ type }) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {type}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', //vertical positioning
    alignItems: 'center', //horiz positioning
    height: 60,
    paddingTop: 15,

    // shadow stuff
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,

    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
};

export default Header;
