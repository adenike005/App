import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Color from '../Const/Color'
import Images from '../Const/Images'
import React from 'react'

const Sign = ({navigation}) => {
  return (
    <View style={{flex: 1,  alignItems:"center"}}>
      <View style={{width:"100%", height:'50%'}}>
        <Image source={Images.Signup} style={{width:"100%", height:"100%"}} resizeMode='contain'/>
      </View>
      <View>
        <Text style={{fontSize: 32, marginBottom:10}}>Let’s Get Started!</Text>
        <Text style={{fontSize: 22, marginBottom:40, fontFamily:"Thin"}}>Let’s dive into your account</Text>
      </View>
      <View>
        <TouchableOpacity
        style={{backgroundColor:Color.primary, width: 250, height:60,justifyContent:"center", alignItems:"center", borderRadius:30, marginBottom:20}}
        onPress={() => navigation.navigate('Signin')}>
        <Text style={{color:Color.white, fontWeight:"bold", fontSize:18}}>Sign Up</Text></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
        style={{backgroundColor:Color.secondary, width: 250, height:60,justifyContent:"center", alignItems:"center", borderRadius:30, }}><Text style={{color:Color.primary,fontWeight:"bold", fontSize:18}}>Log In</Text></TouchableOpacity>
      </View>
      <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:30}}>
        <View style={{marginHorizontal: 10,}}><Text style={{fontFamily:"Thin"}}>Privacy Policy</Text></View>
        <View style={{width:15, height:15, borderRadius: 15, backgroundColor:Color.primary,marginHorizontal: 10}}></View>
        <View><Text style={{fontFamily:"Thin"}}>Terms of Service</Text></View>
      </View>
    </View>
  )
}

export default Sign

const styles = StyleSheet.create({})