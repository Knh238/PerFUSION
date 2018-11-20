import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  //   Text,
  View,
  TouchableOpacity
} from "react-native";
// import { Button, CheckBox } from "react-native-elements";
import {
  Button,
  CheckBox,
  ListItem,
  List,
  Card,
  Divider,
  Text
} from "react-native-elements";
import { LinearGradient } from "expo";
// import { Card, List, ListItem, Divider } from "react-native-material-ui";
// import {
//   Container,
//   Header,
//   Content,
//   Body,
//   List,
//   ListItem,
//   Footer,
//   Left,
//   Right
// } from "native-base";

import Bullets3 from "./Bullets3";
var firebase = require("firebase");
import AppTabNavigator from "../navigation/AppTabNavigator";

//used material UI before
//use elements
//or native base

class ChapterThree extends Component {
  static navigationOptions = {
    //header: null
    // tabBarVisible: true
  };
  constructor(props) {
    super(props);
    this.state = { show: false };
    // this._mounted = false;
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
    // this.showItem=this.showItem.bind(this)
    // this.makeList = this.makeList.bind(this);
    this.showContents = this.showContents.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheck(key) {
    // firebase
    //   .database()
    //   .ref('tasks/' + key)
    //   .update({
    //     completed: !this.state[key],
    //   })
    //   .then(
    this.setState({ [key]: !this.state[key] });
  }

  //   componentDidMount() {
  //     this._mounted = true;
  //     var self = this;
  //     // await firebase.auth().onAuthStateChanged(function(user) {
  //     //   if (user) {
  //     const ref = firebase.database().ref();
  //     ref.on("value", function(snapshot) {
  //       const chapters = snapshot.val().chapters;
  //       //   let chOne;
  //       for (var key in chapters) {
  //         if (chapters[key].title === 1) {
  //           const chOne = chapters[key];
  //           console.log("chone", chOne);
  //         }
  //       }
  //       self.setState({ chapter: chOne });
  //     });
  //     //   } else {
  //     //     console.log("not logged in");
  //     //   }
  //     // });
  //   }

  //   componentWillUnmount() {
  //     this._mounted = false;
  //   }

  //   handleSubmit() {
  //     const state = this.state;
  //     const deleted = [];
  //     for (var key in state) {
  //       if (state[key] === true) {
  //         deleted.push(key);
  //         this.setState({ [key]: !this.state[key] });
  //       }
  //     }
  //     deleted.map(todo => {
  //       firebase
  //         .database()
  //         .ref("tasks")
  //         .child(todo)
  //         .remove();
  //     });
  //   }
  showContents() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const nav = this.props.navigation;
    let task = {
      key: "hey",
      content: "Task",
      assigned: "person",
      color: "5FA6B9"
    };
    //console.log(this.state);
    // console.log(
    //   "props in chapter one render",
    //   this.props.navigation.state.params.chapter
    // );
    const { chapter } = nav.state.params;
    // console.log("this is subsections", chapter);
    return (
      // <SafeAreaView>
      <View
      // style={{
      //   // display: "flex",

      //   padding: 10
      //   //backgroundColor: "#5FA6B9",
      //   // float: "center",
      //   // alignItems: "stretch"
      //   // flexGrow: 1,
      //   // paddingBottom: 10

      //   // backgroundImage: "linear-gradient(to bottom right, red, yellow)"
      // }}
      >
        <ScrollView>
          <LinearGradient
            colors={["#90CAF9", "#2196F3", "#1976D2"]}
            // style={{ padding: 15, alignItems: "center", borderRadius: 5 }}
          >
            <Text
              style={{
                fontSize: 20,
                // color: "white",
                padding: 5,
                textAlign: "center",
                fontFamily: "permanent-marker"
              }}
            >
              Option # 3 : "NIGHT SKY"
            </Text>
            <Text
              style={{
                fontSize: 15,
                // color: "white",
                padding: 5,
                textAlign: "center",
                fontFamily: "firaBold"
              }}
            >
              font: fira bold || gradient background --can be any combo of
              colors! || star bookmark icon
            </Text>
            <View style={{ padding: 20 }}>
              {chapter
                ? chapter.subsections[0].sections.map(task => {
                    return (
                      <Card
                        //   containerStyle={{ backgroundColor: "grey" }}
                        style={{
                          // display: "flex",
                          // alignContent: "space-around",
                          fontFamily: "firaBold"
                          // padding: 2
                        }}
                      >
                        <CheckBox
                          containerStyle={{
                            marginLeft: 0,
                            marginRight: 0,
                            marginTop: 0,
                            marginBottom: 0,
                            borderWidth: 0,
                            borderRadius: 0,
                            backgroundColor: "white"
                          }}
                          right
                          checkedColor={"orange"}
                          uncheckedColor={"black"}
                          size="35"
                          // checkedIcon="bookmark"
                          // uncheckedIcon="bookmark-o"
                          checkedIcon="star"
                          uncheckedIcon="star-o"
                          checked={this.state[task.key]}
                          onPress={() => this.handleCheck(task.key)}
                        />
                        <TouchableOpacity
                          onPress={
                            () => this.showContents()
                            //   <Bullets2 points={task.contents} />
                            //   console.log("this is pressed", task.contents)
                            //   return this.makeList(task.contents);
                            //   <Bullets points={task.contents} />;
                            // console.log(this.makeList(task.contents));
                          }
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              // color: "rgba(96,100,109, 1)",
                              textAlign: "center",
                              fontFamily: "firaBold"
                            }}
                          >
                            {task.title}
                          </Text>
                        </TouchableOpacity>
                        <Divider />
                        {this.state.show ? (
                          <Bullets3 points={task.contents} />
                        ) : null}
                      </Card>
                    );
                  })
                : null}
            </View>
          </LinearGradient>
        </ScrollView>
      </View>
    );
  }
}

export default ChapterThree;
