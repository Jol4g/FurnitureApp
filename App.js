import React, { useEffect } from "react";
import { StyleSheet,SafeAreaView, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { Onbording1, Onbording2 } from "./src/screens";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView
      style={styles.container}
    >
     <Onbording2/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ececec",
  },
  View: {
    padding:10,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "10%",
    width: "90%",
    elevation: 3,
  },
  head:{
    fontSize:20,
    paddingVertical:20,
  },
  text:{
    fontSize: 12
  }
});

export default App;
