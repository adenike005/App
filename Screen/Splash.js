

import { View, Text, Image, StyleSheet, Dimensions, Animated } from 'react-native'
import React, { useRef, useEffect } from 'react'
import Images from '../Const/Images'
import Color from '../Const/Color'
import { useNavigation } from '@react-navigation/native';

const Splash = ({navigation}) => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animationSequence = Animated.sequence([
        Animated.timing(moveAnim, {
          duration: 500,
          toValue: Dimensions.get('window').width / 1.6,
          delay: 0,
          useNativeDriver: false,
        }),
        Animated.timing(moveAnim, {
          duration: 500,
          toValue: 0,
          delay: 0,
          useNativeDriver: false,
        }),
      ]);
      
      Animated.timing(fadeAnim, {
        duration: 500,
        toValue: 1,
        delay: 500,
        useNativeDriver: false,
      }).start(() => {
        setTimeout(() => {
          navigation.navigate('Onboarding1');
        }, 500);
      });
      

    animationSequence.start(() => {
      Animated.timing(fadeAnim, {
        duration: 1000,
        toValue: 1,
        delay: 1000,
        useNativeDriver: false,
      }).start(() => {
        setTimeout(() => {
          // Navigate to onboarding screen
          // Replace 'Onboardings' with the actual onboarding screen name
          navigation.replace('Onboarding1');
        }, 1000); 
      });
    });
  }, []);

  return (
    <Animated.View style={{ flex: 1, backgroundColor: Color.primary, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Image source={Images.logo} style={{ width: 200, height: 200, resizeMode: 'contain', opacity: fadeAnim, transform: [{ translateX: moveAnim }] }} />
      <Animated.Text style={{ textAlign: 'center', color: Color.white, textTransform: 'uppercase', fontSize: 36, letterSpacing: 5, fontFamily: 'Black', opacity: fadeAnim, transform: [{ translateY: moveAnim }] }}>FINENDAR</Animated.Text>
    </Animated.View>
  );
};

export default Splash;







