import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Onbording1, Login} from '../../screens';
import {NavigationContainer} from '@react-navigation/native';
const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={'Main'}
          component={Onbording1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'login'}
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
