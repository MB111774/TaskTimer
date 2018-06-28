import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import StartScreen from './StartScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: StartScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  }
);

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default App;
