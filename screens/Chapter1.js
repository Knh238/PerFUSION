import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Button, CheckBox } from "react-native-elements";
import { Card, List, ListItem, Divider } from "react-native-material-ui";

import Bullets from "./Bullets";
var firebase = require("firebase");
import AppTabNavigator from "../navigation/AppTabNavigator";

class ChapterOne extends Component {
  static navigationOptions = {
    // header: null,
    // tabBarVisible: true
  };
  constructor(props) {
    super(props);
    this.state = {};
    // this._mounted = false;
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
    // this.showItem=this.showItem.bind(this)
    // this.makeList = this.makeList.bind(this);
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
      <SafeAreaView style={{ marginTop: 10, backgroundColor: "#5FA6B9" }}>
        <ScrollView>
          <View>
            {chapter
              ? chapter.subsections[0].sections.map(task => {
                  return (
                    <Card
                      //   containerStyle={{ backgroundColor: "grey" }}
                      style={{
                        display: "flex",
                        alignContent: "space-between"
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          //   console.log("this is pressed", task.contents)
                          //   return this.makeList(task.contents);
                          //   <Bullets points={task.contents} />;
                          // console.log(this.makeList(task.contents));
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 28,
                            // color: "rgba(96,100,109, 1)",
                            color: "white",
                            backgroundColor: "royalblue",
                            textAlign: "center",
                            fontFamily: "playfairBold"
                          }}
                        >
                          {task.title}
                        </Text>
                      </TouchableOpacity>

                      <Bullets points={task.contents} />
                    </Card>
                  );
                })
              : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ChapterOne;
