import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainNavigation from './src/navigations/navigation/navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <MainNavigation />;
};

export default App;
