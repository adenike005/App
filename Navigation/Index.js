import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screen/Splash';
import Onboardings from '../Screen/Onboardings';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name='Splash' component={Splash}/>
            <Stack.Screen name='Onboardings' component={Onboardings} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index