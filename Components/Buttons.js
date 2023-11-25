import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Color from '../Const/Color';
const Buttons = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 50,
        width: '100%',
        backgroundColor: Color.primary,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
      }}>
      <Text style={{color: Color.white, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Buttons;