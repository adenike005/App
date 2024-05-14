import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screen/Splash';
import Onboarding1 from '../Screen/Onboarding1';
import Onboarding2 from '../Screen/Onboarding2';
import Onboarding3 from '../Screen/Onboarding3';
import Sign from '../Screen/Sign';
import Signin from '../Screen/Signin';
import Login from '../Screen/Login';
import Success from '../Screen/Success';
import Onboarding4 from '../Screen/Onboarding4';
import Profile from '../Screen/Profile';

const Stack = createStackNavigator();

const Index = () => {
  const onboardingScreens = [
    { name: 'Onboarding1', component: Onboarding1 },
    { name: 'Onboarding2', component: Onboarding2},
    { name: 'Onboarding3', component: Onboarding3},
    { name: 'Onboarding4', component: Onboarding4},
    
    
  ];
  return (
    <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
            headerShown: false,
          }}>
            {/* <Stack.Screen name='Splash' component={Splash}/> */}
            
            
            {onboardingScreens.map(({ name, component }) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}

        <Stack.Screen name='Sign' component={Sign}/>
        {/* <Stack.Screen name='Signin' component={Signin}/>

        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Success' component={Success}/>
        <Stack.Screen name='Profile' component={Profile}/> */}
        
        {/* <Stack.Screen name='Loader' component={Loader}/> */}


        </Stack.Navigator>
        {/* <DotNavigation currentIndex={0} totalScreens={onboardingScreens.length} /> */}
    </NavigationContainer>
  )
}

export default Index