import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React,{useState} from 'react'
import Images from '../Const/Images'
import Color from '../Const/Color'
import Icon from 'react-native-vector-icons/Ionicons';


const Signin = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <ScrollView style={{flex:1,}}>
      <View> 
        
        <TouchableOpacity>
        <Icon name="arrow-back" size={30} color={Color.dark}
        onPress={() => navigation.goBack()} />
        </TouchableOpacity>
      </View>
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Image source={Images.Layer}/>
            <Text style={{fontFamily:"Black", fontSize:25, marginTop:10, marginBottom: 10}}>Create Account</Text>
            <Text style={{fontFamily:"Thin", fontSize: 18,}}>Elevate your Project Management with us </Text>
        </View>

        <View style={{marginTop:20, marginHorizontal: "10%"}}>
          <Text style={{marginBottom: 5}}>First Name</Text>
          <View style={{width: "100%", height:50, backgroundColor:Color.secondary, display:"flex", flexDirection:"row",alignItems:"center", paddingHorizontal: 10, marginBottom: 10}}>
           <TouchableOpacity><Icon name="person" size={20} color={Color.dark} /></TouchableOpacity>
           <TextInput
           placeholder='First name'
           style={{
            marginHorizontal: 10,
            opacity: 0.5
           }}/>
          </View>

          <Text style={{marginBottom: 5}}>Last name</Text>
          <View style={{width: "100%", height:50, backgroundColor:Color.secondary, display:"flex", flexDirection:"row",alignItems:"center", paddingHorizontal: 10,marginBottom: 10}}>
           <TouchableOpacity><Icon name="person" size={20} color={Color.dark} /></TouchableOpacity>
           <TextInput
           placeholder='Last name'
           style={{
            marginHorizontal: 10,
            opacity: 0.5
           }}/>
          </View>

          <Text style={{marginBottom: 5}}>Email</Text>
          <View style={{width: "100%", height:50, backgroundColor:Color.secondary, display:"flex", flexDirection:"row",alignItems:"center", paddingHorizontal: 10,marginBottom: 10}}>
           <TouchableOpacity><Icon name="mail" size={20} color={Color.dark} /></TouchableOpacity>
           <TextInput
           placeholder='Email'
           style={{
            marginHorizontal: 10,
            opacity: 0.5
           }}/>
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
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
          <View style={{alignItems:"center", display:"flex", flexDirection:"row"}}>
            <TouchableOpacity>
              <Icon name="lock-closed" size={20} color={Color.dark} />
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
          </View>
          <View>
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
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
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
          <View style={{alignItems:"center", display:"flex", flexDirection:"row"}}>
            <TouchableOpacity>
              <Icon name="lock-closed" size={20} color={Color.dark} />
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
          </View>
          <View >
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Icon name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
        </View>
     
    </ScrollView>
  )
}

export default Signin

const styles = StyleSheet.create({})