import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
// import CalendarView from "../screens/Calendar";
// import Notes from "../screens/Notes";
// import Write from "../screens/Write";

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
      screen: LinksScreen,
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
      showLabel: false
    }
  }
);

export default AppTabNavigator;
