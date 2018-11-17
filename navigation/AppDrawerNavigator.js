import React, { Component } from "react";
import { Image, ScrollView } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import {
  Container,
  Header,
  Content,
  Body,
  Button,
  Text,
  View,
  List,
  ListItem,
  Footer
} from "native-base";
import { Avatar, Divider, Icon } from "react-native-elements";
import AppStackNavigator from "./AppStackNavigator";
import LinksScreen from "../screens/LinksScreen";
import HomeScreen from "../screens/HomeScreen";
// import Login from "../screens/Login";
import Todo from "../screens/ToDo";
import firebase from "../firebase";
import ChapterOne from "../screens/Chapter1";
// import CreateProject from "../screens/CreateProject";
// import ProjectHome from "../screens/ProjectHome";
// import Profile from "../screens/Profile";
// import Photos from "../screens/Photos";

const logOut = function() {
  firebase
    .auth()
    .signOut()
    .then(
      function() {
        console.log("Sign out complete.");
      },
      function(error) {
        console.error(error);
      }
    );
};

const LogoutButton = props => {
  return firebase.auth().currentUser ? (
    <Footer
      style={{
        flexDirection: "column",
        height: 90
      }}
    >
      <Button
        full
        light
        onPress={() => props.navigation.navigate("Create")}
        style={{ borderColor: "#c0c0c0" }}
      >
        <Text style={{ fontFamily: "permanent-marker" }}>Create Project</Text>
      </Button>
      <Divider style={{ backgroundColor: "#c0c0c0" }} />
      <Button
        full
        light
        onPress={() => {
          logOut();
          props.navigation.navigate("Login");
        }}
      >
        <Text style={{ fontFamily: "permanent-marker" }}>LOGOUT</Text>
      </Button>
    </Footer>
  ) : null;
};

class CustomDrawer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // componentDidMount() {
  //   const self = this;
  // let groupProjects;
  // let userProjects;
  // firebase.auth().onAuthStateChanged(async function(user) {
  //   if (user) {
  //     const projects = await firebase
  //       .database()
  //       .ref("projects")
  //       .once("value")
  //       .then(snap => snap.val());
  //     groupProjects = [];
  //     userProjects = [];
  //     for (let key in projects) {
  //       if (projects[key].members) {
  //         const members = projects[key].members;
  //         const name = projects[key].name;
  //         const color = projects[key].color;
  //         if (members.includes(user.email) && members.length > 1) {
  //           groupProjects.push({ name, key, color, members });
  //         } else if (members[0] === user.email) {
  //           userProjects.push({ name, key, color, members });
  //         }
  //       }
  //     }
  //     self.setState({
  //       groups: groupProjects,
  //       personal: userProjects
  //     });
  //   }
  // });
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  componentDidMount() {
    this._mounted = true;
    var self = this;
    // await firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    const ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
      const chapters = snapshot.val().chapters;
      let chapterOne;
      for (var key in chapters) {
        if (chapters[key].title === 1) {
          chapterOne = chapters[key];
          // console.log(
          //   "chapter one in componente did mount for drawer",
          //   chapterOne
          // );
        }
      }
      self.setState({ chapter: chapterOne });
    });
    //   } else {
    //     console.log("not logged in");
    //   }
    // });
  }

  render() {
    const nav = this.props.navigation;
    const chapter = this.state.chapter;
    // console.log("this chapter thing in the drawer render", chapter);
    return (
      <Container>
        <Header style={{ height: 80 }}>
          <Body>
            {/* <Image
              style={{ height: 60, width: 60 }}
              source={require("../assets/images/heart.png")}
            /> */}
            <Icon
              reverse
              name="heartbeat"
              type="font-awesome"
              color="royalblue"
              onPress={() => nav.navigate("Home")}
            />
          </Body>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <ScrollView>
            <List>
              <ListItem
                style={{
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                onPress={() => nav.navigate("Profile")}
              >
                <Text style={{ fontFamily: "Roboto" }}>Profile</Text>
              </ListItem>
              <ListItem
                style={{
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                onPress={() => nav.navigate("Todo")}
              >
                <Text style={{ fontFamily: "Roboto" }}>To-do</Text>
              </ListItem>
              <ListItem
                style={{
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                onPress={() => nav.navigate("Photos")}
              >
                <Text style={{ fontFamily: "Roboto" }}>Images</Text>
              </ListItem>
              <ListItem
                style={{
                  marginLeft: 0,
                  paddingLeft: 10,
                  backgroundColor: "#F2F2F2"
                }}
                onPress={() =>
                  nav.navigate("ChapterOne", { chapter: this.state.chapter })
                }
              >
                <Text style={{ fontFamily: "permanent-marker" }}>
                  Chapter 1
                </Text>
              </ListItem>
              <List style={{ marginLeft: "5%" }}>
                <ListItem
                  title="1.1"
                  onPress={() =>
                    nav.navigate("ChapterOne", { chapter: this.state.chapter })
                  }
                >
                  <Text style={{ fontFamily: "permanent-marker" }}>1.1</Text>
                </ListItem>
                <ListItem
                  title="1.2"
                  onPress={() =>
                    nav.navigate("ChapterOne", { chapter: this.state.chapter })
                  }
                >
                  <Text style={{ fontFamily: "permanent-marker" }}>1.2</Text>
                </ListItem>
                <ListItem
                  title="1.3"
                  onPress={() =>
                    nav.navigate("ChapterOne", { chapter: this.state.chapter })
                  }
                >
                  <Text style={{ fontFamily: "permanent-marker" }}>1.3</Text>
                </ListItem>
                <ListItem
                  title="1.4"
                  onPress={() =>
                    nav.navigate("ChapterOne", { chapter: this.state.chapter })
                  }
                >
                  <Text style={{ fontFamily: "permanent-marker" }}>1.4</Text>
                </ListItem>
                <ListItem
                  title="1.5"
                  onPress={() =>
                    nav.navigate("ChapterOne", { chapter: this.state.chapter })
                  }
                >
                  <Text style={{ fontFamily: "permanent-marker" }}>1.5</Text>
                </ListItem>
              </List>

              {this.state.personal
                ? this.state.personal.map(project => {
                    return (
                      <ListItem
                        key={project.key}
                        title={project.name}
                        style={{
                          marginLeft: 0,
                          paddingLeft: 10
                        }}
                        container={{
                          flex: 1
                        }}
                        onPress={() =>
                          nav.navigate("ProjectHome", {
                            project: project
                          })
                        }
                      >
                        {" "}
                        <Avatar
                          rounded
                          icon={{ name: "user", type: "font-awesome" }}
                          size="xsmall"
                          containerStyle={{
                            marginRight: 20
                          }}
                          overlayContainerStyle={{
                            backgroundColor: `#${project.color}`
                          }}
                        />
                        <Text style={{ fontFamily: "permanent-marker" }}>
                          {project.name}
                        </Text>
                      </ListItem>
                    );
                  })
                : null}

              <ListItem
                style={{
                  marginLeft: 0,
                  paddingLeft: 10,
                  backgroundColor: "#F2F2F2"
                }}
              >
                <Text style={{ fontFamily: "permanent-marker" }}>
                  Chapter 2
                </Text>
              </ListItem>
              <List style={{ marginLeft: "5%" }}>
                <ListItem title="1.1">
                  <Text style={{ fontFamily: "permanent-marker" }}>2.1</Text>
                </ListItem>
                <ListItem title="1.2">
                  <Text style={{ fontFamily: "permanent-marker" }}>2.2</Text>
                </ListItem>
                <ListItem title="1.3">
                  <Text style={{ fontFamily: "permanent-marker" }}>2.3</Text>
                </ListItem>
                <ListItem title="1.4">
                  <Text style={{ fontFamily: "permanent-marker" }}>2.4</Text>
                </ListItem>
                <ListItem title="1.5">
                  <Text style={{ fontFamily: "permanent-marker" }}>2.5</Text>
                </ListItem>
              </List>
              <ListItem
                style={{
                  marginLeft: 0,
                  paddingLeft: 10,
                  backgroundColor: "#F2F2F2"
                }}
              >
                <Text style={{ fontFamily: "permanent-marker" }}>
                  Chapter 3
                </Text>
              </ListItem>
              <List style={{ marginLeft: "5%" }}>
                <ListItem title="1.1">
                  <Text style={{ fontFamily: "permanent-marker" }}>3.1</Text>
                </ListItem>
                <ListItem title="1.2">
                  <Text style={{ fontFamily: "permanent-marker" }}>3.2</Text>
                </ListItem>
                <ListItem title="1.3">
                  <Text style={{ fontFamily: "permanent-marker" }}>3.3</Text>
                </ListItem>
                <ListItem title="1.4">
                  <Text style={{ fontFamily: "permanent-marker" }}>3.4</Text>
                </ListItem>
                <ListItem title="1.5">
                  <Text style={{ fontFamily: "permanent-marker" }}>3.5</Text>
                </ListItem>
              </List>
              {this.state.groups
                ? this.state.groups.map(project => {
                    return (
                      <ListItem
                        key={project.key}
                        title={project.name}
                        style={{
                          marginLeft: 0,
                          paddingLeft: 10
                        }}
                        container={{
                          flex: 1
                        }}
                        onPress={() =>
                          nav.navigate("ProjectHome", {
                            project: project
                          })
                        }
                      >
                        {" "}
                        <Avatar
                          rounded
                          icon={{ name: "user", type: "font-awesome" }}
                          size="xsmall"
                          containerStyle={{
                            marginRight: 20
                          }}
                          overlayContainerStyle={{
                            backgroundColor: `#${project.color}`
                          }}
                        />
                        <Text style={{ fontFamily: "permanent-marker" }}>
                          {project.name}
                        </Text>
                      </ListItem>
                    );
                  })
                : null}
            </List>
          </ScrollView>
        </Content>
        <LogoutButton navigation={nav} />
      </Container>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: AppStackNavigator,
    Links: LinksScreen,
    ChapterOne: ChapterOne

    // Todo: Todo,
    // Create: CreateProject,
    // ProjectHome: ProjectHome,
    // Profile: Profile,
    // Photos: Photos
  },
  {
    initialRouteName: "Home",
    drawerPosition: "left",
    contentComponent: CustomDrawer
  }
);

export default AppDrawerNavigator;
