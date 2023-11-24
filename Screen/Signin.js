import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView, TextInput, Keyboard } from 'react-native'
import React,{useState} from 'react'
import Images from '../Const/Images'
import Color from '../Const/Color'
import Icon from 'react-native-vector-icons/Ionicons';
import Loader from './Loader';


const Signin = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // const [Inputs, setInputs] = React.useState({

  // })
  
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          navigation.navigate('HomeScreen');
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({...userData, loggedIn: true}),
          );
        } else {
          Alert.alert('Error', 'Invalid Details');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  


  return (
    <ScrollView style={{flex:1,}}>
       {/* <Loader visible={loading} /> */}
      <View> 
        
        <TouchableOpacity>
        <Icon name="arrow-back" size={30} color={Color.dark}
        onPress={() => navigation.goBack()} />
        </TouchableOpacity>
      </View>
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Image source={Images.Layer} style={{width:50, height
            :50}} resizeMode='contain'/>
            <Text style={{fontFamily:"Black", fontSize:25, marginTop:10, marginBottom: 10}}>Create Account</Text>
            <Text style={{fontFamily:"Thin", fontSize: 15, }}>Elevate your Project Management with us </Text>
        </View>

        <View style={{marginTop:20, marginHorizontal: "10%"}}>
          <Text style={{marginBottom: 5}}>First Name</Text>
          <View style={{width: "100%", height:50, backgroundColor:Color.secondary, display:"flex", flexDirection:"row",alignItems:"center", paddingHorizontal: 10, marginBottom: 10}}>
           <TouchableOpacity><Icon name="person" size={20} color={Color.grey} /></TouchableOpacity>
           <TextInput
           placeholder='First name'
           style={{
            marginHorizontal: 10,
            opacity: 0.5
           }}/>
          </View>

          <Text style={{marginBottom: 5}}>Last name</Text>
          <View style={{width: "100%", height:50, backgroundColor:Color.secondary, display:"flex", flexDirection:"row",alignItems:"center", paddingHorizontal: 10,marginBottom: 10}}>
           <TouchableOpacity><Icon name="person" size={20} color={Color.grey} /></TouchableOpacity>
           <TextInput
           placeholder='Last name'
           style={{
            marginHorizontal: 10,
            opacity: 0.5
           }}/>
          </View>

          <Text style={{marginBottom: 5}}>Email</Text>
          <View style={{width: "100%", height:50, backgroundColor:Color.secondary, display:"flex", flexDirection:"row",alignItems:"center", paddingHorizontal: 10,marginBottom: 10}}>
           <TouchableOpacity><Icon name="mail" size={20} color={Color.grey} /></TouchableOpacity>
           <TextInput
           placeholder='Email'
           style={{
            marginHorizontal: 10,
            opacity: 0.5
           }}
           onChangeText={(text) => handleOnchange(text, 'email')}
           />
           {/* <Text style={{ color: 'red', marginBottom: 5 }}>{errors.email}</Text> */}
          </View>
      <View>
      <Text style={{ marginBottom: 5 }}>Password</Text>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: Color.secondary,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          marginBottom: 10,
          display:"flex"
        }}
      >
        <TouchableOpacity>
          <Icon name="lock-closed" size={20} color={Color.grey} />
        </TouchableOpacity>
        <TextInput
          secureTextEntry={!showPassword}
          placeholder="Password"
          style={{
            marginHorizontal: 10,
            opacity: 0.5,
            flex: 1,
          }}
        />
         <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color={Color.grey} />
            </TouchableOpacity>
        
      </View>
    </View>
    <View>
      <Text style={{ marginBottom: 5 }}>Confirm Password</Text>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: Color.secondary,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          marginBottom: 10,
          display:"flex",
          flexDirection:"row",
          alignItems:"center"
        }}
      >
         <TouchableOpacity>
          <Icon name="lock-closed" size={20} color={Color.grey} />
        </TouchableOpacity>
        <TextInput
          secureTextEntry={!showConfirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          placeholder="Confirm Password"
          style={{
            marginHorizontal: 10,
            opacity: 0.5,
            flex: 1,
          }}
        />
         <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Icon name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} color={Color.grey} />
        </TouchableOpacity>
      </View>
    </View>
    <View style={{justifyContent:"center", display:"flex", alignItems:"center", flexDirection:"row",marginBottom:15}}>
      <Text style={{fontSize:14, fontFamily:"Thin"}}>Already have an account?</Text>
      <Text style={{fontSize:14, fontFamily:"Black", color:Color.primary,marginLeft:5}}
      onPress={() => navigation.navigate("Login")}>Log in</Text>
    </View>
    
    {/*  */}
    <View style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <TouchableOpacity
        style={{backgroundColor:Color.primary, width: 250, height:60,justifyContent:"center", alignItems:"center", borderRadius:30, marginBottom:20}}
        >
        <Text style={{color:Color.white, fontWeight:"bold", fontSize:18}}
        >Sign Up</Text></TouchableOpacity>
      </View>
    </View>
     
    </ScrollView>
  )
}

export default Signin

const styles = StyleSheet.create({})