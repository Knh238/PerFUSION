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

import Bullets3 from "./Bullets3";
var firebase = require("firebase");
import AppTabNavigator from "../navigation/AppTabNavigator";

class ChapterThree extends Component {
  static navigationOptions = {
    //header: null
    // tabBarVisible: true
  };
  constructor(props) {
    super(props);
    this.state = { show: [], marked: [] };

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
                ? chapter.subsections[0].sections.map((task, index) => {
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
                          checkedIcon="star"
                          uncheckedIcon="star-o"
                          checked={this.state.marked.includes(index)}
                          onPress={() => this.handleCheck(index)}
                        />
                        <TouchableOpacity
                          onPress={() => this.showContents(index)}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              textAlign: "center",
                              fontFamily: "firaBold"
                            }}
                          >
                            {task.title}
                          </Text>
                        </TouchableOpacity>
                        <Divider />
                        {this.state.show.includes(index) ? (
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
