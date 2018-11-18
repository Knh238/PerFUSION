import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Avatar, Divider, Icon } from "react-native-elements";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CalendarView from "../screens/Calendar";
import ProgressScreen from "../screens/Progress";
import QuizHomeScreen from "../screens/QuizHome";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};
const ProgressStack = createStackNavigator({
  Progress: ProgressScreen
});

ProgressStack.navigationOptions = {
  tabBarLabel: "Progress",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
    // <Icon reverse name="heartbeat" type="font-awesome" color="royalblue" />
  )
};
const CalendarStack = createStackNavigator({
  Calendar: CalendarView
});

CalendarStack.navigationOptions = {
  tabBarLabel: "Calendar",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-link${focused ? "" : "-outline"}`
          : "md-link"
      }
    />
  )
};

const QuizStack = createStackNavigator({
  Quizzes: QuizHomeScreen
});

QuizStack.navigationOptions = {
  tabBarLabel: "Quizzes",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-options${focused ? "" : "-outline"}`
          : "md-options"
      }
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  ProgressStack,
  CalendarStack,
  QuizStack
});
