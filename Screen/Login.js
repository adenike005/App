import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Images from "../Const/Images";
import Color from "../Const/Color";
import { MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons';
import Buttons from "../Components/Buttons";
import Input from "../Components/Input";
const Login = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{ marginHorizontal: 16, marginVertical: 10 }}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={25}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>

      <View style={{ justifyContent: "center", width: "100%", height: "40%" }}>
        <Image
          source={Images.Group4}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={{ marginHorizontal: 16 }}>
        <Text>Welcome Back!</Text>
        <Text>Enter your registered email and password</Text>
      </View>
      <View>
        <View style={{ marginHorizontal: 16, marginTop: "5%" }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="email address"
            // error={errors.email}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label="Password"
            placeholder="password"
            // error={errors.password}
            password
          />
        </View>
        <View style={{ marginHorizontal: 16, marginTop: "5%" , display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <TouchableOpacity
            style={{
             
              borderColor: Color.primary,
              borderRadius: 5,
              padding: 5,
            }}
            onPress={handleCheck}
          >
            {checked ? (
              <MaterialIcons name="check-box" size={24} color={Color.primary} />
            ) : (
              <MaterialIcons name="check-box-outline-blank" size={24} color={Color.primary} />
            )}
          </TouchableOpacity>

          <Text>Forgot Password?</Text>
        </View>
       <View style={{ marginHorizontal: 16, marginTop: "5%" }}>
       <Buttons title="Login"  onPress={() => navigation.navigate("Success")}/>
       </View>
      </View>
    </View>
  );
};

export default Login;
