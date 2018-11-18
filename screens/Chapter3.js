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
    // header: null,
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
    //console.log(this.state);
    // console.log(
    //   "props in chapter one render",
    //   this.props.navigation.state.params.chapter
    // );
    const { chapter } = nav.state.params;
    // console.log("this is subsections", chapter);
    return (
      <View
        style={{
          display: "flex",
          marginTop: 10,
          backgroundColor: "#5FA6B9",
          float: "center",
          flexGrow: 1,
          marginBottom: 10
        }}
      >
        <ScrollView>
          <Text
            style={{
              fontSize: 15,
              color: "white",
              marginLeft: 5,
              marginRight: 5,
              textAlign: "center",
              fontFamily: "space-mono"
            }}
          >
            react-native-elements && font: space mono
          </Text>
          {chapter
            ? chapter.subsections[0].sections.map(task => {
                return (
                  <Card
                    //   containerStyle={{ backgroundColor: "grey" }}
                    style={{
                      display: "flex",
                      alignContent: "space-between",
                      fontFamily: "space-mono"
                    }}
                  >
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
                          fontSize: 28,
                          color: "rgba(96,100,109, 1)",
                          textAlign: "center",
                          fontFamily: "space-mono"
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
        </ScrollView>
      </View>
    );
  }
}

export default ChapterThree;
