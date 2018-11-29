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

import Bullets2 from "./Bullets2";
var firebase = require("firebase");
import AppTabNavigator from "../navigation/AppTabNavigator";

//used material UI before
//use elements
//or native base

class ChapterTwo extends Component {
  static navigationOptions = {
    // header: null,
    tabBarVisible: false
  };
  constructor(props) {
    super(props);
    // this.state = {};
    this.state = { show: [], marked: [] };
    // this._mounted = false;
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
    // this.showItem=this.showItem.bind(this)
    // this.makeList = this.makeList.bind(this);
    this.showContents = this.showContents.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheck(key) {
    //eventually will have to update in databse
    // firebase
    //   .database()
    //   .ref('chapter/-LRU9y3vSSVlmxgkjUfT/sections' + key)
    //   .update({
    //     show: !this.state[key],
    //   })
    //   .then(
    // this.setState({ [key]: !this.state[key] });
    //console.log("evt is -----", evt, "state also ----", this.state.show);
    if (this.state.marked.includes(key)) {
      const arr = this.state.marked.filter(a => a !== key);
      this.setState({ marked: arr });
    } else {
      const alt = this.state.marked;
      alt.push(key);
      this.setState({ marked: alt });
    }
  }

  // componentDidMount() {
  //eventually have to make an actual database call here
  //or pass down a function from a higher order component to update databse
  // }

  showContents(evt) {
    console.log("evt is -----", evt, "state also ----", this.state.show);
    if (this.state.show.includes(evt)) {
      const arr = this.state.show.filter(a => a !== evt);
      console.log("arr -----", arr);
      this.setState({ show: arr });
    } else {
      const alt = this.state.show;
      alt.push(evt);

      this.setState({ show: alt });
    }
  }

  render() {
    const nav = this.props.navigation;
    let task = {
      key: "hey",
      content: "Task",
      assigned: "person",
      color: "5FA6B9"
    };

    const { chapter } = nav.state.params;
    const topics = this.props.navigation.state.params.chapter.subsections[0]
      .sections;

    return (
      <View
        style={{
          // display: "flex",

          padding: 10,
          backgroundColor: "#5FA6B9"
          // float: "center",
          // flexGrow: 1
          // marginBottom: 10
        }}
      >
        {/* <SafeAreaView> */}
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              marginLeft: 5,
              marginRight: 5,
              textAlign: "center",
              fontFamily: "permanent-marker"
            }}
          >
            Option # 2 : "NO SCRUBS"
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "white",
              // marginLeft: 5,
              // marginRight: 5,
              textAlign: "center",
              fontFamily: "space-mono"
            }}
          >
            font: space mono || react-native-elements || bookmark icon
          </Text>
          {topics
            ? topics.map((task, index) => {
                return (
                  <Card
                    //   containerStyle={{ backgroundColor: "grey" }}
                    style={{
                      // display: "flex",
                      // alignContent: "space-between",

                      fontFamily: "space-mono"
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
                      checkedColor={"aqua"}
                      size="35"
                      uncheckedColor={"#424242"}
                      checkedIcon="bookmark"
                      uncheckedIcon="bookmark-o"
                      checked={this.state.marked.includes(index)}
                      onPress={() => this.handleCheck(index)}
                    />
                    <TouchableOpacity
                      value={task.contents}
                      //onPress={this.showContents(this)}
                      //onPress={() => this.showContents(task, index)}
                      onPress={() => this.showContents(index)}
                    >
                      <Text
                        style={{
                          fontSize: 23,
                          color: "#424242",
                          textAlign: "center",
                          fontFamily: "space-mono"
                        }}
                      >
                        {task.title}
                      </Text>
                      {this.state.show.includes(index) ? (
                        <List>
                          <Bullets2 points={task.contents} />
                        </List>
                      ) : null}
                    </TouchableOpacity>

                    {/* {this.state.show ? (
                      <List>
                        <Bullets2 points={task.contents} />
                      </List>
                    ) : null} */}
                  </Card>
                );
              })
            : null}
          {/* </View> */}
        </ScrollView>
        {/* </SafeAreaView> */}
      </View>
    );
  }
}

export default ChapterTwo;
