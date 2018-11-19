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
    this.state = { expanded: false };
    // this._mounted = false;
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
    // this.showItem=this.showItem.bind(this)
    // this.makeList = this.makeList.bind(this);
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
      <View style={{ marginTop: 10, backgroundColor: "#5FA6B9" }}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              marginLeft: 5,
              marginRight: 5,
              textAlign: "center",
              fontFamily: "playfair"
            }}
          >
            native base and some material ui && font: playfair
          </Text>
          {chapter
            ? chapter.subsections[0].sections.map(task => {
                return (
                  <Card
                    //   containerStyle={{ backgroundColor: "grey" }}
                    style={{
                      display: "flex"
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
                        backgroundColor: "royalblue"
                      }}
                      right
                      checkedColor={"aqua"}
                      checkedIcon="bookmark"
                      uncheckedIcon="bookmark-o"
                      checked={this.state[task.key]}
                      onPress={() => this.handleCheck(task.key)}
                    />
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
                      {/* <CheckBox
                        containerStyle={{
                          marginLeft: 0,
                          marginRight: 0,
                          borderWidth: 0,
                          backgroundColor: "royalblue",
                          float: "right"
                        }}
                        center
                        checkedColor={"aqua"}
                        checkedIcon="bookmark"
                        uncheckedIcon="bookmark-o"
                        checked={this.state[task.key]}
                        onPress={() => this.handleCheck(task.key)}
                      /> */}
                      {task.title}
                    </Text>

                    <Bullets points={task.contents} />
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
