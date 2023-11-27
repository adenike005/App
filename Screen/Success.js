import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from 'react'
import Color from '../Const/Color'
import Images from '../Const/Images'
import Buttons from '../Const/Button';

const Success = ({navigation}) => {
    const screenWidth = Dimensions.get('window').width;
    const fontSizePercentage = 6; // Adjust this percentage as needed
    const fontSizePercentages = 4; // Adjust this percentage as needed
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

        <View style={{marginTop:"10%", marginBottom:"50%"}}>
            <Text style={{textAlign:"center", fontSize: (screenWidth * fontSizePercentage) / 100 , fontFamily:"Bold", marginBottom:"3%"}}>Account Successfully Created!</Text>
            <Text style={{textAlign:"center",fontSize: (screenWidth * fontSizePercentages) / 100, fontSize:13, fontFamily:"Thin"}}>Congratulations! check your email for {'\n'}confirmation</Text>
        </View>

        <View style={{display:"flex", alignItems:"center"}}>
            <Buttons title="Continue" onPress={() => navigation.navigate("Login")}/>
        </View>
      
    </View>
  )
}

export default Success

const styles = StyleSheet.create({})