import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { CheckBox } from "react-native-elements";
import {
  Card,
  List,
  ListItem,
  Divider,
  IconToggle
} from "react-native-material-ui";
import { Button, Icon } from "native-base";
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
    this.state = { show: false };
    // this._mounted = false;
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
    // this.showItem=this.showItem.bind(this)
    // this.makeList = this.makeList.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.showContents = this.showContents.bind(this);
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
  showContents() {
    this.setState({ show: !this.state.show });
  }
  // handleExpandClick = () => {
  //   this.setState(state => ({ expanded: !state.expanded }));
  // };
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
    let task = {
      key: "hey",
      content: "Task",
      assigned: "person",
      color: "5FA6B9"
    };
    const { chapter } = nav.state.params;
    // console.log("this is subsections", chapter);
    return (
      <View
        style={{
          // paddingTop: 10,
          // paddingLeft: 10,
          // paddingRight: 10,
          // paddingBottom: 10,
          padding: 10,
          backgroundColor: "#ECEFF1"
        }}
      >
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              // color: "white",

              textAlign: "center",
              // fontFamily: "playfair"
              fontFamily: "permanent-marker"
            }}
          >
            Option # 1 : "Chart-ed"
          </Text>
          <Text
            style={{
              fontSize: 15,
              // color: "white",

              textAlign: "center",
              fontFamily: "playfair"
            }}
          >
            font: permanent marker & playfair || native base &&some material ui
            || heartbeat bookmark icon
          </Text>
          {chapter
            ? chapter.subsections[0].sections.map(task => {
                return (
                  <Card
                    raised={"true"}
                    //   containerStyle={{ backgroundColor: "grey" }}
                    style={{
                      display: "flex",
                      borderRadius: 80,
                      borderStyle: "solid",
                      borderWidth: "5px",
                      borderColor: "black"
                      // backgroundColor: "#90CAF9"
                      // alignContent: "space-between"
                    }}
                  >
                    {/* <CheckBox
                        // containerStyle={{
                        //   marginLeft: 0,
                        //   marginRight: 0,
                        //   borderWidth: 0

                        //   // backgroundColor: "white"
                        // }}
                        center
                        iconRight
                        checkedColor={"aqua"}
                        checkedIcon="bookmark"
                        uncheckedIcon="bookmark-o"
                        checked={this.state[task.key]}
                        onPress={() => this.handleCheck(task.key)}
                      />
                      > */}
                    {/* <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                      </IconButton> */}
                    {/* <IconToggle name="bookmark" underlayColor="pink" /> */}

                    {/* <CheckBox
                      containerStyle={{
                        marginLeft: 0,
                        marginRight: 0,
                        borderWidth: 0,
                        backgroundColor: "royalblue",
                        float: "right"
                      }}
                      right
                      checkedColor={"aqua"}
                      checkedIcon="bookmark"
                      uncheckedIcon="bookmark-o"
                      checked={this.state[task.key]}
                      onPress={() => this.handleCheck(task.key)}
                    /> */}
                    <CheckBox
                      containerStyle={{
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        marginBottom: 0,
                        borderWidth: 0,
                        borderRadius: 0,
                        backgroundColor: "#90CAF9"
                      }}
                      right
                      // limegreen:
                      // checkedColor={"#76FF03"}
                      //fuscia red /dark red
                      checkedColor={"#F50057"}
                      //yellow:
                      //checkedColor={"#FFFF00"}
                      // //bright blue/aqua
                      // checkedColor={"#18FFFF"}
                      uncheckedColor={"white"}
                      color={"black"}
                      // checkedIcon="bookmark"
                      // uncheckedIcon="bookmark-o"
                      // iconStyle="reverse"
                      size="35"
                      checkedIcon="heartbeat"
                      uncheckedIcon="heartbeat"
                      checked={this.state[task.key]}
                      onPress={() => this.handleCheck(task.key)}
                    />
                    <TouchableOpacity onPress={() => this.showContents()}>
                      <Text
                        style={{
                          fontSize: 22,
                          // color: "rgba(96,100,109, 1)",
                          color: "white",
                          backgroundColor: "#90CAF9",
                          textAlign: "center",
                          // fontFamily: "playfairBold"
                          fontFamily: "permanent-marker"
                        }}
                      >
                        {task.title}
                      </Text>
                    </TouchableOpacity>
                    {this.state.show ? (
                      <Bullets points={task.contents} />
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

export default ChapterOne;

///add property to data base
//array of user emails --marked []includes this.user or i'll hardcode my email address
//as i add that email to that array on click
//i will also add it to users bookmarks array. this will be an array of objects. it will put the entire chapter1-subsection. and then the array index.
//So to delete it from that---we will add that later? it would delete from both
//perhaps right now it only deletes from one ==the users who have highlighted array--not on the users highlights array yet
//so we aren't toggling--true or false or complete or incomplete. we are adding or removing the user name form the array
