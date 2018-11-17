import React, { Component } from "react";
import { ScrollView, SafeAreaView, Text, View } from "react-native";
import { Button, CheckBox, ListItem, List, Card } from "react-native-elements";
// import { Card } from "react-native-material-ui";
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
            {/* <List> */}
            {chapter
              ? chapter.subsections[0].sections.map(task => {
                  return (
                    // <ListItem
                    //   //   rightIcon={{ name: "lens", color: "#" + task.color }}
                    //   key={task.key}
                    //   title={task.num}
                    //   subtitle={`Assigned: ${task.num}`}
                    //   leftIcon={
                    //     <CheckBox
                    //       containerStyle={{
                    //         marginLeft: 0,
                    //         marginRight: 0,
                    //         borderWidth: 0,
                    //         backgroundColor: "white"
                    //       }}
                    //       //   checkedColor={"#" + task.color}
                    //       checkedIcon="dot-circle-o"
                    //       uncheckedIcon="circle-o"
                    //       //   checked={this.state[task.key]}
                    //       //   onPress={() => this.handleCheck(task.key)}
                    //     />
                    //   }
                    // >
                    <Card
                      //   containerStyle={{ backgroundColor: "grey" }}
                      style={{
                        display: "flex",
                        alignContent: "space-between"
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 28,
                          color: "rgba(96,100,109, 1)",
                          textAlign: "center",
                          fontFamily: "permanent-marker"
                        }}
                      >
                        {task.title}
                      </Text>
                      <List>
                        <Text
                          style={{
                            fontSize: 20,
                            color: "rgba(96,100,109, 1)",
                            textAlign: "left",
                            marginLeft: 20,
                            fontFamily: "permanent-marker"
                          }}
                        >
                          {task.contents}
                        </Text>

                        {/* <Bullets notes={task.contents} /> */}
                        {/* <List> */}
                        {/* <ListItem> */}
                        {/* </Text> */}
                      </List>
                      {/* .map(item =>(
                      <ListItem>
                        <Text
                          style={{
                            fontSize: 20,
                            color: "rgba(96,100,109, 1)",
                            textAlign: "center"
                            //   fontFamily: "permanent-marker"
                          }}
                        >
                          {item.value}
                        </Text>
                      </ListItem>
                      ))
                    </List> */}
                      {/* </Text> */}
                    </Card>

                    /* </ListItem>  */
                  );
                })
              : null}
            {/* </List> */}
            {/* <Button
            title="NEW TO DO"
            buttonStyle={{
              width: "100%",
              height: 45,
              borderRadius: 5,
              marginTop: 10
            }}
            onPress={() => {
              nav.navigate("CreateTodo");
            }}
          />
          <Button
            title="DELETE SELECTED"
            buttonStyle={{
              width: "100%",
              height: 45,
              borderRadius: 5,
              marginTop: 10
            }}
            onPress={() => {
              this.handleSubmit();
            }}
          /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ChapterOne;
