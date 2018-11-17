import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CalendarView from "../screens/Calendar";
// import CalendarView from "../screens/Calendar";
// import Notes from "../screens/Notes";
// import Write from "../screens/Write";

// const HomeStack = createStackNavigator({
//   Home: HomeScreen
// });

// HomeStack.navigationOptions = {
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-home${focused ? "" : "-outline"}`
//           : "md-home"
//       }
//     />
//   )
// };
// const CalendarStack = createStackNavigator({
//   Links: LinksScreen
// });

// CalendarStack.navigationOptions = {
//   tabBarLabel: "Calendar",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-calendar${focused ? "" : "-outline"}`
//           : "md-calendar"
//       }
//     />
//   )
// };
// const ProfileStack = createStackNavigator({
//   Links: LinksScreen
// });

// ProfileStack.navigationOptions = {
//   tabBarLabel: "Notes",
//   navigationOptions: {
//     tabBarIcon: ({ focused }) => (
//       <TabBarIcon
//         focused={focused}
//         name={
//           Platform.OS === "ios"
//             ? `ios-list-box${focused ? "" : "-outline"}`
//             : "md-list-box"
//         }
//       />
//     )
//   }
// };
const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === "ios"
                ? `ios-home${focused ? "" : "-outline"}`
                : "md-home"
            }
          />
        )
      }
    },
    Calendar: {
      screen: CalendarView,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === "ios"
                ? `ios-calendar${focused ? "" : "-outline"}`
                : "md-calendar"
            }
          />
        )
      }
    },
    Notes: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === "ios"
                ? `ios-list-box${focused ? "" : "-outline"}`
                : "md-list-box"
            }
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: true
    }
  }
);
// const AppTabNavigator = createBottomTabNavigator(
//   HomeStack,
//   CalendarStack,
//   ProfileStack
// );

export default AppTabNavigator;
