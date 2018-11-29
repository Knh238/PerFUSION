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
    this.state = { show: [], marked: [] };
    /// this.props.navigation.state.params.chapter.sections;
    // this._mounted = false;
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
    // this.showItem=this.showItem.bind(this)
    // this.makeList = this.makeList.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.showContents = this.showContents.bind(this);
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

  showContents(evt) {
    if (this.state.show.includes(evt)) {
      const arr = this.state.show.filter(a => a !== evt);
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
    // const chapter = this.state.currentSection;
    // console.log(
    //   "this is subsections",
    //   this.props.navigation.state.params.chapter
    // );
    console.log("this sateae is ", this.state);
    return (
      <View
        style={{
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
            ? chapter.subsections[0].sections.map((task, index) => {
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
                      checkedColor={"#F50057"}
                      uncheckedColor={"white"}
                      color={"black"}
                      size="35"
                      checkedIcon="heartbeat"
                      uncheckedIcon="heartbeat"
                      checked={this.state.marked.includes(index)}
                      onPress={() => this.handleCheck(index)}
                    />
                    <TouchableOpacity onPress={() => this.showContents(index)}>
                      <Text
                        style={{
                          fontSize: 22,

                          color: "white",
                          backgroundColor: "#90CAF9",
                          textAlign: "center",

                          fontFamily: "permanent-marker"
                        }}
                      >
                        {task.title}
                      </Text>
                    </TouchableOpacity>
                    {/* {this.state.currentSection.subsections[0][index].show ? ( */}
                    {this.state.show.includes(index) ? (
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
// bookmarkedBy ["kristin","personTwo"]
