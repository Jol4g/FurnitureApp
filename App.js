import React, { useEffect } from "react";
import { StyleSheet,SafeAreaView, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigation from "./src/navigations/navigation";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createStackNavigator();
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen options={{headerShown:false}} name={'FirstScreen'} component={MainNavigation}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;
