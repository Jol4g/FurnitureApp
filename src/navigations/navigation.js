import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from './onboarding';
const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name={'Main'} component={OnBoarding} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
