import React from "react";
import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator
});

// import React from "react";
// import { View, TouchableOpacity, Image } from "react-native";
// import { Icon } from "react-native-elements";
// import { createStackNavigator } from "react-navigation";
// import AppTabNavigator from "./AppTabNavigator";
// import HomeScreen from "../screens/HomeScreen";
// import LinksScreen from "../screens/LinksScreen";
// import SettingsScreen from "../screens/SettingsScreen";
// // import Todo from '../screens/ToDo';
// // import CreateProject from '../screens/CreateProject';
// // import CreateEvent from '../screens/CreateEvent';
// // import CreateTodo from '../screens/CreateTodo';
// // import ProjectHome from '../screens/ProjectHome';
// // import Profile from '../screens/Profile';
// // import Photos from '../screens/Photos';
// // import CreatePhoto from '../screens/CreatePhoto';

// const AppNavigator = createStackNavigator(
//   {
//     AppTabNavigator: {
//       screen: AppTabNavigator,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: (
//           <Image
//             source={require("../assets/images/heart.png")}
//             style={{ width: 150, height: 60 }}
//           />
//         ),
//         headerTintColor: "#000000",
//         headerBackTitle: null,
//         headerLeft: (
//           <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//             <View style={{ paddingHorizontal: 10 }}>
//               <Icon name="menu" />
//             </View>
//           </TouchableOpacity>
//         ),
//         headerRight: (
//           <TouchableOpacity onPress={() => navigation.navigate("CreateEvent")}>
//             <View style={{ paddingHorizontal: 10 }}>
//               <Icon name="add" />
//             </View>
//           </TouchableOpacity>
//         )
//       })
//     },
//     HomeScreen: {
//       screen: HomeScreen,
//       headerRight: null
//     },
//     LinksScreen: {
//       screen: LinksScreen,
//       headerRight: null
//     },
//     SettingsScreen: {
//       screen: SettingsScreen,
//       headerRight: null
//     }
//     //   CreateEvent: {
//     //     screen: CreateEvent,
//     //     headerRight: null
//     //   },
//     //   CreateTodo: {
//     //     screen: CreateTodo,
//     //     headerRight: null
//     //   },
//     //   ProjectHome: {
//     //     screen: ProjectHome,
//     //     headerRight: null
//     //   },
//     //   Profile: {
//     //     screen: Profile,
//     //     headerRight: null
//     //   },
//     //   Photos: {
//     //     screen: Photos,
//     //     headerRight: null
//     //   },
//     //   CreatePhoto: {
//     //     screen: CreatePhoto,
//     //     headerRight: null
//     //   }
//   },
//   {
//     cardStyle: { backgroundColor: "#FFFFFF" }
//   }
// );

// export default AppNavigator;
