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
  Footer,
  Left,
  Right,
  Switch,
  Badge
} from "native-base";
import { Avatar, Divider, Icon } from "react-native-elements";
import AppStackNavigator from "./AppStackNavigator";
import LinksScreen from "../screens/LinksScreen";
import HomeScreen from "../screens/HomeScreen";
// import Login from "../screens/Login";
import Todo from "../screens/ToDo";
import firebase from "../firebase";
import ChapterOne from "../screens/Chapter1";
import ChapterTwo from "../screens/Chapter2";
import ChapterThree from "../screens/Chapter3";
import ScheduleHomeScreen from "../screens/Schedule";
import WeekScreen from "../screens/Week";
// import ProjectHome from "../screens/ProjectHome";
import Profile from "../screens/Profile";

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
    this.state = {
      showOne: false,
      showTwo: false,
      showThree: false
    };
    this.clickOne = this.clickOne.bind(this);
    this.clickOne = this.clickOne.bind(this);
    this.clickOne = this.clickOne.bind(this);
  }

  clickOne() {
    if (!this.state.showOne) {
      this.setState({ showOne: true });
    } else {
      this.setState({ showOne: false });
    }
  }
  clickTwo() {
    if (!this.state.showTwo) {
      this.setState({ showTwo: true });
    } else {
      this.setState({ showTwo: false });
    }
  }
  clickThree() {
    if (!this.state.showThree) {
      this.setState({ showThree: true });
    } else {
      this.setState({ showThree: false });
    }
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

    return (
      <Container>
        <Header style={{ height: 80 }}>
          <Body>
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
                onPress={() => nav.navigate("Links")}
              >
                <Body>
                  <Text style={{ fontFamily: "poppins" }}>
                    Profile(Font options)
                  </Text>
                </Body>
              </ListItem>
              <ListItem
                style={{
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                onPress={() => nav.navigate("Todo")}
              >
                <Body>
                  <Text style={{ fontFamily: "poppins" }}>To-do:</Text>
                </Body>
                <Right>
                  <Badge primary>
                    <Text>25</Text>
                  </Badge>
                </Right>
              </ListItem>

              <ListItem
                style={{
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                onPress={() => nav.navigate("Schedule")}
              >
                <Body>
                  <Text style={{ fontFamily: "poppins" }}>Review Schedule</Text>
                  {/* <Text style={{ fontFamily: "poppins" }}>Days left:</Text> */}
                </Body>
                <Right>
                  <Badge danger>
                    <Text>14</Text>
                  </Badge>
                </Right>
              </ListItem>
              <ListItem
                icon
                style={{
                  marginLeft: 0,
                  paddingLeft: 10,
                  backgroundColor: "#F2F2F2"
                }}
                onPress={() =>
                  nav.navigate("ChapterOne", { chapter: this.state.chapter })
                }
              >
                <Body>
                  <Text style={{ fontFamily: "poppins" }}>Chapter 1:</Text>
                </Body>
                <Right>
                  <Icon
                    //reverse
                    raised
                    name="chevron-down"
                    type="font-awesome"
                    color="royalblue"
                    size="15"
                    onPress={() => this.clickOne()}
                  />
                </Right>
              </ListItem>
              {this.state.showOne ? (
                <List style={{ marginLeft: "5%" }}>
                  <ListItem icon>
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>1.1</Text>
                    </Body>
                    <Right>
                      <Icon
                        //reverse
                        // name="caret-down"
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterOne", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>
                  <ListItem
                    icon
                    title="1.2"
                    onPress={() =>
                      nav.navigate("ChapterOne", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>1.2</Text>
                    </Body>
                    <Right>
                      <Icon
                        //reverse
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterOne", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>
                  <ListItem
                    icon
                    title="1.3"
                    onPress={() =>
                      nav.navigate("ChapterOne", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    {" "}
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>1.3</Text>
                    </Body>
                    <Right>
                      <Icon
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() => nav.navigate("Home")}
                        right
                      />
                    </Right>
                  </ListItem>
                  <ListItem
                    icon
                    title="1.4"
                    onPress={() =>
                      nav.navigate("ChapterOne", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    {" "}
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>1.4</Text>
                    </Body>
                    <Right>
                      <Icon
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() => nav.navigate("Home")}
                        right
                      />
                    </Right>
                  </ListItem>
                  <ListItem
                    icon
                    title="1.5"
                    onPress={() =>
                      nav.navigate("ChapterOne", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>1.5</Text>
                    </Body>
                    <Right>
                      <Icon
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() => nav.navigate("Home")}
                        right
                      />
                    </Right>
                  </ListItem>
                </List>
              ) : null}
              <ListItem
                icon
                style={{
                  marginLeft: 0,
                  paddingLeft: 10,
                  backgroundColor: "#F2F2F2"
                }}
              >
                <Body>
                  <Text style={{ fontFamily: "poppins" }}>Chapter 2:</Text>
                </Body>
                <Right>
                  <Icon
                    //reverse
                    raised
                    name="chevron-down"
                    type="font-awesome"
                    color="royalblue"
                    size="15"
                    onPress={() => this.clickTwo()}
                  />
                </Right>
              </ListItem>
              {this.state.showTwo ? (
                <List style={{ marginLeft: "5%" }}>
                  <ListItem
                    icon
                    title="2.1"
                    onPress={() =>
                      nav.navigate("ChapterTwo", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>2.1</Text>
                    </Body>
                    <Right>
                      <Icon
                        //reverse
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterTwo", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>
                  <ListItem
                    icon
                    title="2.2"
                    onPress={() =>
                      nav.navigate("ChapterTwo", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>2.2</Text>
                    </Body>
                    <Right>
                      <Icon
                        //reverse
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterTwo", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>
                  <ListItem
                    icon
                    title="2.3"
                    onPress={() =>
                      nav.navigate("ChapterTwo", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>2.3</Text>
                    </Body>
                    <Right>
                      <Icon
                        //reverse
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterTwo", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>
                  <ListItem
                    icon
                    title="2.4"
                    onPress={() =>
                      nav.navigate("ChapterTwo", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>2.4</Text>
                    </Body>
                    <Right>
                      <Icon
                        //reverse
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterTwo", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>
                  <ListItem
                    icon
                    title="2.5"
                    onPress={() =>
                      nav.navigate("ChapterTwo", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>2.5</Text>
                    </Body>
                    <Right>
                      <Icon
                        //reverse
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterTwo", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>
                </List>
              ) : null}
              <ListItem
                icon
                style={{
                  marginLeft: 0,
                  paddingLeft: 10,
                  backgroundColor: "#F2F2F2"
                }}
              >
                <Body>
                  <Text style={{ fontFamily: "poppins" }}>Chapter 3:</Text>
                </Body>
                <Right>
                  <Icon
                    //reverse
                    raised
                    name="chevron-down"
                    type="font-awesome"
                    color="royalblue"
                    size="15"
                    onPress={() => this.clickThree()}
                  />
                </Right>
              </ListItem>
              {this.state.showThree ? (
                <List style={{ marginLeft: "5%" }}>
                  <ListItem
                    icon
                    title="3.1"
                    onPress={() =>
                      nav.navigate("ChapterThree", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>3.1</Text>
                    </Body>
                    <Right>
                      <Icon
                        // reverse
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterThree", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>
                  <ListItem
                    icon
                    title="3.2"
                    onPress={() =>
                      nav.navigate("ChapterThree", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>3.2</Text>
                    </Body>
                    <Right>
                      <Icon
                        //reverse
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterThree", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>
                  <ListItem
                    icon
                    title="3.3"
                    onPress={() =>
                      nav.navigate("ChapterThree", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>3.3</Text>
                    </Body>
                    <Right>
                      <Icon
                        //reverse
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterThree", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>
                  <ListItem
                    icon
                    title="3.4"
                    onPress={() =>
                      nav.navigate("ChapterThree", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>3.4</Text>
                    </Body>
                    <Right>
                      <Icon
                        //reverse
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterThree", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>

                  <ListItem
                    icon
                    title="3.5"
                    onPress={() =>
                      nav.navigate("ChapterThree", {
                        chapter: this.state.chapter
                      })
                    }
                  >
                    <Body>
                      <Text style={{ fontFamily: "poppins" }}>3.5</Text>
                    </Body>
                    <Right>
                      <Icon
                        //reverse
                        raised
                        name="chevron-right"
                        type="font-awesome"
                        color="royalblue"
                        size="15"
                        onPress={() =>
                          nav.navigate("ChapterThree", {
                            chapter: this.state.chapter
                          })
                        }
                      />
                    </Right>
                  </ListItem>
                </List>
              ) : null}
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
    ChapterOne: ChapterOne,
    ChapterTwo: ChapterTwo,
    ChapterThree: ChapterThree,
    Todo: Todo,
    Profile: Profile,
    Week: WeekScreen,
    Schedule: ScheduleHomeScreen
  },
  {
    initialRouteName: "Home",
    drawerPosition: "left",
    contentComponent: CustomDrawer
  }
);

export default AppDrawerNavigator;

// {this.state.personal
//   ? this.state.personal.map(project => {
//       return (
//         <ListItem
//           key={project.key}
//           title={project.name}
//           style={{
//             marginLeft: 0,
//             paddingLeft: 10
//           }}
//           container={{
//             flex: 1
//           }}
//           onPress={() =>
//             nav.navigate("ProjectHome", {
//               project: project
//             })
//           }
//         >
//           {" "}
//           <Avatar
//             rounded
//             icon={{ name: "user", type: "font-awesome" }}
//             size="xsmall"
//             containerStyle={{
//               marginRight: 20
//             }}
//             overlayContainerStyle={{
//               backgroundColor: `#${project.color}`
//             }}
//           />
//           <Text style={{ fontFamily: "permanent-marker" }}>
//             {project.name}
//           </Text>
//         </ListItem>
//       );
//     })
//   : null}
// {this.state.groups
//   ? this.state.groups.map(project => {
//       return (
//         <ListItem
//           key={project.key}
//           title={project.name}
//           style={{
//             marginLeft: 0,
//             paddingLeft: 10
//           }}
//           container={{
//             flex: 1
//           }}
//           onPress={() =>
//             nav.navigate("ProjectHome", {
//               project: project
//             })
//           }
//         >
//           {" "}
//           <Avatar
//             rounded
//             icon={{ name: "user", type: "font-awesome" }}
//             size="xsmall"
//             containerStyle={{
//               marginRight: 20
//             }}
//             overlayContainerStyle={{
//               backgroundColor: `#${project.color}`
//             }}
//           />
//           <Text style={{ fontFamily: "permanent-marker" }}>
//             {project.name}
//           </Text>
//         </ListItem>
//       );
//     })
//   : null}
