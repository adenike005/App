import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Color from '../Const/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 5}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? Color.red
              : isFocused
              ? Color.secondary
              : Color.secondary,
            alignItems: 'center',
            backgroundColor:Color.secondary,
            borderRadius: 10
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: Color.grey, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: Color.darkBlue, flex: 1}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            // name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            style={{color: Color.grey, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: Color.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: Color.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: Color.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default Input;