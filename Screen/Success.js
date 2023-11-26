import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from 'react'
import Color from '../Const/Color'
import Images from '../Const/Images'

const Success = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <TouchableOpacity style={{margin: 16}}>
        <Icon
          name="arrow-left"
          size={25}
          color="black"
          onPress={() => navigation.goBack()}
        />
        </TouchableOpacity>

        <View style={{justifyContent:"center", width:"100%", height:"40%",}}>
            <Image source={Images.Group5} style={{width:"100%", height:"100%"}} resizeMode='contain'/>
        </View>

        <View style={{marginTop:"10%"}}>
            <Text style={{textAlign:"center", fontSize:23, fontFamily:"Bold", marginBottom:"3%"}}>Account Successfully Created!</Text>
            <Text style={{textAlign:"center", fontSize:18, fontFamily:"Thin"}}>Congratulations! check your email for {'\n'}confirmation</Text>
        </View>
      
    </View>
  )
}

export default Success

const styles = StyleSheet.create({})