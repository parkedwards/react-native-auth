import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ value, placeholder, handleChange, label, secureTextEntry }) => {
  const { labelStyle, inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        value={value}
        placeholder={placeholder}  
        style={inputStyle}
        onChangeText={handleChange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};
