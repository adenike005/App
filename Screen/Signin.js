// import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView, TextInput, Keyboard } from 'react-native'
// import React,{useState} from 'react'
// import Images from '../Const/Images'
// import Color from '../Const/Color'
// import Icon from 'react-native-vector-icons/Ionicons';
// import Loader from './Loader';

// const Signin = ({navigation}) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   // const [Inputs, setInputs] = React.useState({

//   // })

//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   // const [password, setPassword] = useState('');

//   const [errors, setErrors] = useState({
//     email: '',
//     name: '',
//     password: '',
//   });

//   const validateEmail = () => {
//     // Basic email validation using a regular expression
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.trim() || !emailRegex.test(email.trim())) {
//       setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
//       return false;
//     }
//     setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
//     return true;
//   };

//   const validateName = () => {
//     // Basic name validation (non-empty)
//     if (!name.trim()) {
//       setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
//       return false;
//     }
//     setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
//     return true;
//   };

//   const validatePassword = () => {
//     // Basic password validation (at least 6 characters)
//     if (password.length < 6) {
//       setErrors((prevErrors) => ({ ...prevErrors, password: 'Password should be at least 6 characters' }));
//       return false;
//     }
//     setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
//     return true;
//   };

//   const handleSignup = () => {
//     if (validateEmail() && validateName() && validatePassword()) {
//       // All validations passed, perform signup logic here
//       console.log('Signup successful!');
//       // You can add your signup logic or API call here
//     } else {
//       // There are validation errors, handle accordingly (e.g., display error message)
//       console.log('Signup failed due to validation errors.');
//     }
//   };

//   return (
//     <ScrollView style={{flex:1,}}>
//        {/* <Loader visible={loading} /> */}
//       <View>

//         <TouchableOpacity>
//         <Icon name="arrow-back" size={30} color={Color.dark}
//         onPress={() => navigation.goBack()} />
//         </TouchableOpacity>
//       </View>
//         <View style={{justifyContent:"center", alignItems:"center"}}>
//             <Image source={Images.Layer} style={{width:50, height
//             :50}} resizeMode='contain'/>
//             <Text style={{fontFamily:"Black", fontSize:25, marginTop:10, marginBottom: 10}}>Create Account</Text>
//             <Text style={{fontFamily:"Thin", fontSize: 15, }}>Elevate your Project Management with us </Text>
//         </View>

//         <View style={{marginTop:20, marginHorizontal: "10%"}}>
//           <Text style={{marginBottom: 5}}>First Name</Text>
//           <View style={{width: "100%", height:50, backgroundColor:Color.secondary, display:"flex", flexDirection:"row",alignItems:"center", paddingHorizontal: 10, marginBottom: 10}}>
//            <TouchableOpacity><Icon name="person" size={20} color={Color.grey} /></TouchableOpacity>
//            <TextInput
//            placeholder='First name'
//            style={{
//             marginHorizontal: 10,
//             opacity: 0.5
//            }}/>
//           </View>

//           <Text style={{marginBottom: 5}}>Last name</Text>
//           <View style={{width: "100%", height:50, backgroundColor:Color.secondary, display:"flex", flexDirection:"row",alignItems:"center", paddingHorizontal: 10,marginBottom: 10}}>
//            <TouchableOpacity><Icon name="person" size={20} color={Color.grey} /></TouchableOpacity>
//            <TextInput
//            placeholder='Last name'
//            style={{
//             marginHorizontal: 10,
//             opacity: 0.5
//            }}/>
//           </View>

//           <Text style={{marginBottom: 5}}>Email</Text>
//           {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
//           <View style={{width: "100%", height:50, backgroundColor:Color.secondary, display:"flex", flexDirection:"row",alignItems:"center", paddingHorizontal: 10,marginBottom: 10}}>
//            <TouchableOpacity><Icon name="mail" size={20} color={Color.grey} /></TouchableOpacity>
//            <TextInput
//            placeholder='Email'
//            style={{
//             marginHorizontal: 10,
//             opacity: 0.5
//            }}
//            value={email}
//            onChangeText={(text) => setEmail(text)}
//            onBlur={validateEmail}

//            />

//            {/* <Text style={{ color: 'red', marginBottom: 5 }}>{errors.email}</Text> */}
//           </View>
//       <View>
//       <Text style={{ marginBottom: 5 }}>Password</Text>
//       <View
//         style={{
//           width: '100%',
//           height: 50,
//           backgroundColor: Color.secondary,
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingHorizontal: 10,
//           marginBottom: 10,
//           display:"flex"
//         }}
//       >
//         <TouchableOpacity>
//           <Icon name="lock-closed" size={20} color={Color.grey} />
//         </TouchableOpacity>
//         <TextInput
//           secureTextEntry={!showPassword}
//           placeholder="Password"
//           style={{
//             marginHorizontal: 10,
//             opacity: 0.5,
//             flex: 1,
//           }}
//         />
//          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color={Color.grey} />
//             </TouchableOpacity>

//       </View>
//     </View>
//     <View>
//       <Text style={{ marginBottom: 5 }}>Confirm Password</Text>
//       <View
//         style={{
//           width: '100%',
//           height: 50,
//           backgroundColor: Color.secondary,
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingHorizontal: 15,
//           marginBottom: 10,
//           display:"flex",
//           flexDirection:"row",
//           alignItems:"center"
//         }}
//       >
//          <TouchableOpacity>
//           <Icon name="lock-closed" size={20} color={Color.grey} />
//         </TouchableOpacity>
//         <TextInput
//           secureTextEntry={!showConfirmPassword}
//           onChangeText={(text) => setConfirmPassword(text)}
//           placeholder="Confirm Password"
//           style={{
//             marginHorizontal: 10,
//             opacity: 0.5,
//             flex: 1,
//           }}
//         />
//          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
//           <Icon name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} color={Color.grey} />
//         </TouchableOpacity>
//       </View>
//     </View>
//     <View style={{justifyContent:"center", display:"flex", alignItems:"center", flexDirection:"row",marginBottom:15}}>
//       <Text style={{fontSize:14, fontFamily:"Thin"}}>Already have an account?</Text>
//       <Text style={{fontSize:14, fontFamily:"Black", color:Color.primary,marginLeft:5}}
//       onPress={() => navigation.navigate("Login")}>Log in</Text>
//     </View>

//     {/*  */}
//     <View style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
//         <TouchableOpacity
//         style={{backgroundColor:Color.primary, width: 250, height:60,justifyContent:"center", alignItems:"center", borderRadius:30, marginBottom:20}}
//         onPress={handleSignup}
//         >
//         <Text style={{color:Color.white, fontWeight:"bold", fontSize:18}}
//         onPress={() => navigation.navigate("Loader")}
//         >Sign Up</Text></TouchableOpacity>
//       </View>
//     </View>

//     </ScrollView>
//   )
// }

// export default Signin

// const styles = StyleSheet.create({
//   errorText: {
//     color: 'red',
//     marginBottom: 8,
//   },
// })

import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";

import Color from "../Const/Color";
import Buttons from "../Components/Buttons";
import Input from "../Components/Input";
import Loader from "../Components/Loader";

const RegistrationScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    secondname: "",
    // phone: "",
    password: "",
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
    } else if (inputs.password.length < 5) {
      handleError("Min password length of 5", "password");
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
        navigation.navigate("LoginScreen");
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
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
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
          <Buttons title="Register" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
              color: Color.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Already have account ?Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
