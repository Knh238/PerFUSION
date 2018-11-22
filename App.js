import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView
} from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
// import AppNavigator from "./navigation/AppNavigator";

import { createSwitchNavigator } from "react-navigation";
import AppDrawerNavigator from "./navigation/AppDrawerNavigator";
import HomeScreen from "./screens/HomeScreen";
import AppTabNavigator from "./navigation/AppTabNavigator";
import AppStackNavigator from "./navigation/AppStackNavigator";
// import Signup from './screens/SignUp';

export default class App extends Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return <AppDrawerNavigator />;
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require("./assets/images/heart.png")]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        "permanent-marker": require("./assets/fonts/PermanentMarker-Regular.ttf"),
        Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
        playfair: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),

        poppins: require("./assets/fonts/Poppins-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
// import React, { Component } from 'react';
// import { createSwitchNavigator } from 'react-navigation';
// import AppDrawerNavigator from './navigations/AppDrawerNavigator';
// import Login from './screens/Login';
// import Signup from './screens/SignUp';
// import { Font } from 'expo';

// const Router = createSwitchNavigator(
//   {
//     Login: Login,
//     Signup: Signup,
//     App: AppDrawerNavigator,
//   },
//   {
//     initialRouteName: 'Login',
//   }
// );

// console.disableYellowBox = true;

// export default class App extends Component {
//   async componentDidMount() {
//     await Font.loadAsync({
//       Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
//       Oxygen: require('./assets/fonts/Oxygen-Regular.ttf'),
//       Abril: require('./assets/fonts/AbrilFatface-Regular.ttf'),
//     });
//   }

//   render() {
//     return <Router />;
//   }
// }
