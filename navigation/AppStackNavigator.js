import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import AppTabNavigator from "./AppTabNavigator";
import MainTabNavigator from "./MainTabNavigator";
// import Login from "../screens/Login";
import Todo from "../screens/ToDo";
import ChapterOne from "../screens/Chapter1";
import ChapterTwo from "../screens/Chapter2";
import ChapterThree from "../screens/Chapter3";
import ScheduleHomeScreen from "../screens/Schedule";
import WeekScreen from "../screens/Week";
// import CreateTodo from "../screens/CreateTodo";
// import ProjectHome from "../screens/ProjectHome";
import Profile from "../screens/Profile";
import ModalExample from "../screens/NewNote";
import LinksScreen from "../screens/LinksScreen";
// import Photos from "../screens/Photos";
// import CreatePhoto from "../screens/CreatePhoto";
// import HeartIcon from 'material-ui'

const AppStackNavigator = createStackNavigator(
  {
    MainTabNavigator: {
      screen: MainTabNavigator,
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          // <Image
          //   source={require("../assets/images/heart.png")}
          //   style={{ width: 10, height: 10 }}
          // />
          <Icon name="heartbeat" type="font-awesome" color="royalblue" />
          // <HeartIcon/>
        ),
        headerTintColor: "#000000",
        headerBackTitle: null,
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View style={{ paddingHorizontal: 10 }}>
              <Icon name="menu" />
            </View>
          </TouchableOpacity>
        ),
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate("Note")}>
            <View style={{ paddingHorizontal: 10 }}>
              <Icon name="add" />
            </View>
          </TouchableOpacity>
        )
      })
    },
    Todo: {
      screen: Todo
      // headerRight: null,
      // tabBarVisible: true
    },
    ChapterOne: {
      screen: ChapterOne,
      // headerRight: null,
      appBarVisible: true
    },
    ChapterTwo: {
      screen: ChapterTwo,
      // headerRight: null,
      appBarVisible: true
      // tabBarVisible: true
    },
    ChapterThree: {
      screen: ChapterThree,
      // headerRight: null,
      appBarVisible: true
      //  tabBarVisible: false
    },
    Schedule: {
      screen: ScheduleHomeScreen,
      // headerRight: null,
      appBarVisible: true,
      tabBarVisible: true
    },
    Week: {
      screen: WeekScreen,
      // headerRight: null,
      appBarVisible: true
    },
    Profile: {
      screen: Profile,
      // headerRight: null,
      appBarVisible: true
    },
    Note: {
      screen: ModalExample,
      // headerRight: null,
      appBarVisible: true
    },
    Links: {
      screen: LinksScreen,
      // headerRight: null,
      appBarVisible: true
    }
  },

  {
    cardStyle: { backgroundColor: "#FFFFFF" }
  }
);

export default AppStackNavigator;
