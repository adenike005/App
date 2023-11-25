import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color from '../Const/Color';

const Signin = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    firstname: '',
    secondname: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!inputs.email) {
      newErrors.email = 'Please input email';
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      newErrors.email = 'Please input a valid email';
      isValid = false;
    }

    if (!inputs.firstname) {
      newErrors.firstname = 'Please input firstname';
      isValid = false;
    }

    if (!inputs.secondname) {
      newErrors.secondname = 'Please input SecondName';
      isValid = false;
    }

    if (!inputs.password) {
      newErrors.password = 'Please input password';
      isValid = false;
    } else if (inputs.password.length < 5) {
      newErrors.password = 'Min password length of 5';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      register();
    }
  };

  const register = async () => {
    try {
      // Simulating an asynchronous operation (e.g., API call)
      // Remove the setTimeout when integrating with a real backend
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Save data to AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(inputs));

      // Navigate to the login screen
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevInputs) => ({ ...prevInputs, [input]: text }));
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            size={30}
            color={Color.dark}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          // source={/* Your image source */ }
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text style={{ fontFamily: 'Black', fontSize: 25, marginTop: 10, marginBottom: 10 }}>
          Create Account
        </Text>
        <Text style={{ fontFamily: 'Thin', fontSize: 15 }}>
          Elevate your Project Management with us
        </Text>
      </View>

      <View style={{ marginTop: 20, marginHorizontal: '10%' }}>
        {/* ... (other inputs) */}
        <Text style={{ marginBottom: 5 }}>First Name</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Icon name="person" size={20} color={Color.grey} />
          </TouchableOpacity>
          <TextInput
            placeholder="First name"
            style={styles.input}
            onChangeText={(text) => handleOnchange(text, 'firstname')}
          />
        </View>

        <Text style={{ marginBottom: 5 }}>Last name</Text>
        {!!errors.secondname && <Text style={styles.errorText}>{errors.secondname}</Text>}
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Icon name="person" size={20} color={Color.grey} />
          </TouchableOpacity>
          <TextInput
            placeholder="Last name"
            style={styles.input}
            onChangeText={(text) => handleOnchange(text, 'secondname')}
          />
        </View>

        {/* ... (other inputs) */}

        <View style={styles.errorContainer}>
          {/* <Text style={styles.errorText}>{errors.email}</Text>
          <Text style={styles.errorText}>{errors.firstname}</Text>
          <Text style={styles.errorText}>{errors.secondname}</Text>
          <Text style={styles.errorText}>{errors.password}</Text> */}
        </View>

        {/* ... (other UI elements) */}

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={validate}
          >
            <Text style={{ color: Color.white, fontWeight: 'bold', fontSize: 18 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Color.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    marginHorizontal: 10,
    opacity: 0.5,
    flex: 1,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  signupButton: {
    backgroundColor: Color.primary,
    width: 250,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 20,
  },
});

export default Signin;


