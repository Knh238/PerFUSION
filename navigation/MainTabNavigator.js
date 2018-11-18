import React from "react";
import { Platform, TouchableHighlight } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Avatar, Divider, Icon, Button } from "react-native-elements";
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
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
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
    // <TabBarIcon
    //   focused={focused}
    //   name={
    //     Platform.OS === "ios"
    //       ? `assessment${focused ? "" : "-outline"}`
    //       : "assessment"
    //   }
    // />

    <Icon
      // name="insert-chart"
      // name="assessment"
      name="pie-chart"
      //   // focused={focused}
      type="font-awesome"
      // color="dodgerblue"
      color="grey"
      size="22"
      underlayColor="dogerblue"
      // Component={TouchableHighlight}
      // onPress={() => (color = "dogerblue")}
    />
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
          ? `ios-calendar${focused ? "" : "-outline"}`
          : "md-calendar"
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
          ? `ios-list-box${focused ? "" : "-outline"}`
          : "md-list-box"
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
