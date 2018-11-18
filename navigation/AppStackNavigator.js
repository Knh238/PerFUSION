import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import AppTabNavigator from "./AppTabNavigator";
import MainTabNavigator from "./MainTabNavigator";
// import Login from "../screens/Login";
import Todo from "../screens/ToDo";
import ChapterOne from "../screens/Chapter1";
// import CreateProject from "../screens/CreateProject";
// import CreateEvent from "../screens/CreateEvent";
// import CreateTodo from "../screens/CreateTodo";
// import ProjectHome from "../screens/ProjectHome";
// import Profile from "../screens/Profile";
// import Photos from "../screens/Photos";
// import CreatePhoto from "../screens/CreatePhoto";
// import HeartIcon from 'material-ui'

const AppStackNavigator = createStackNavigator(
  {
    AppTabNavigator: {
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
          <TouchableOpacity onPress={() => navigation.navigate("CreateEvent")}>
            <View style={{ paddingHorizontal: 10 }}>
              <Icon name="add" />
            </View>
          </TouchableOpacity>
        )
      })
    },
    Todo: {
      screen: Todo,
      headerRight: null
    },
    ChapterOne: {
      screen: ChapterOne,
      // headerRight: null,
      appBarVisible: true
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" }
  }
);

export default AppStackNavigator;
