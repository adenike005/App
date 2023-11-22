import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screen/Splash';
import Onboardings from '../Screen/Onboardings';
import Onboarding1 from '../Screen/Onboarding1';
import Onboarding2 from '../Screen/Onboarding2';
import DotNavigation from '../Const/DotNavigation';
import Onboarding3 from '../Screen/Onboarding3';

const Stack = createStackNavigator();

const Index = () => {
  const onboardingScreens = [
    { name: 'Onboarding1', component: Onboarding1 },
    { name: 'Onboarding2', component: Onboarding2},
    { name: 'Onboarding3', component: Onboarding3},
    
  ];
  return (
    <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name='Splash' component={Splash}/>
            <Stack.Screen name='Onboardings' component={Onboardings}/>
            
            {/* {onboardingScreens.map(({ name, component }) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))} */}


        </Stack.Navigator>
        {/* <DotNavigation currentIndex={0} totalScreens={onboardingScreens.length} /> */}
    </NavigationContainer>
  )
}

export default Index