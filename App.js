import React, { useEffect } from "react";
import { StyleSheet,SafeAreaView, Text, View } from "react-native";

import SplashScreen from "react-native-splash-screen";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text
        style={styles.head}
      >
        Splash screen boilerplate
      </Text>
      <View style={styles.View}>
        <Text
        style={styles.text}
        >
          Step 1-   Change launch_screen.xml :
        </Text>
        <Text
          style={styles.text}
        >
          ./android/app/src/main/res/layout/launch_screen.xml
        </Text>
      </View>
      <View style={styles.View}>
      <Text
        style={styles.text}
      >
      Step 2-  Change lo.png :
      </Text>
      <Text
        style={styles.text}
      >
        ./android/app/src/main/res/mipmap/lo.png
      </Text>
    </View>
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
