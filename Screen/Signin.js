import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  Image
} from "react-native";

import Color from "../Const/Color";
import Buttons from "../Components/Buttons";
import Input from "../Components/Input";
import Loader from "../Components/Loader";
import Images from "../Const/Images";


const RegistrationScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    secondname: "",
    // phone: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError("Please input firstname", "fullname");
      isValid = false;
    }

    if (!inputs.secondname) {
      handleError("Please input SecondName", "secondname");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 6) {
      handleError("Min password length of 6", "password");
      isValid = false;
    }

   

    if (!inputs.confirmPassword) {
      handleError('Please input confirmPassword', "confirmPassword") ;
      isValid = false;
    } else if (inputs.confirmPassword !== inputs.password) {
      handleError('Passwords do not match', "confirmPassword");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(inputs));
        navigation.navigate("Login");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: Color.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, justifyContent:"center",marginTop: 20}}
      >
        <Icon name="arrow-left" size={25} color="black" 
        onPress={() => navigation.goBack()}/>
        
        <View style={{justifyContent:"center", alignItems:"center"}}>
           <Image source={Images.Layer} style={{width:50, height
            :50}} resizeMode='contain'/>
           
        </View>
        
        <Text
          style={{
            color: Color.black,
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
        <Text
          style={{
            color: Color.dark,
            fontSize: 18,
            marginVertical: 10,
            fontFamily: "Thin",
          }}
        >
          Elevate your Project Management with us
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="email address"
            error={errors.email}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            iconName="account-outline"
            label="First Name"
            placeholder="First name"
            error={errors.fullname}
          />

<Input
            onChangeText={(text) => handleOnchange(text, "secondname")}
            onFocus={() => handleError(null, "secondname")}
            iconName="account-outline"
            label="First Name"
            placeholder="First name"
            error={errors.secondname}
          />

          {/* <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          /> */}
          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label="Password"
            placeholder="password"
            error={errors.password}
            password
          />
           <Input
            onChangeText={(text) => handleOnchange(text, "confirmPassword")}
            onFocus={() => handleError(null, "confirmPassword")}
            iconName="lock-outline"
            label="confirmPassword"
            placeholder="confirmPassword"
            error={errors.confirmPassword}
            password
          />
          <Buttons title="Register" onPress={validate} />
          
          <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
             <Text
           
            style={{
              color: Color.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Already have account ?
          </Text>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{
              color: Color.primary,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
              marginHorizontal: 5,
            }}
          >
            Login
          </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
