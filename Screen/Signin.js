import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Images from '../Const/Images'
import Color from '../Const/Color'

const Signin = () => {
  return (
    <View style={{flex:1}}>
        <View>
            <Image source={Images.logo}/>
        </View>
     
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({})