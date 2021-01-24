import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Onbording1 } from '../screens/onBoarding';

const OnBoarding = () => {

  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name={'onBoarding'} component={Onbording1} />
    </Stack.Navigator>
  );
};

export default OnBoarding;
