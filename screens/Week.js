import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Button, CheckBox, ListItem, List } from "react-native-elements";
import { Card, Divider } from "react-native-material-ui";

import Bullets from "./Bullets";
var firebase = require("firebase");
import AppTabNavigator from "../navigation/AppTabNavigator";

class WeekScreen extends Component {
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

  render() {
    const nav = this.props.navigation;
    //console.log(this.state);
    // console.log(
    //   "props in chapter one render",
    //   this.props.navigation.state.params.chapter
    // );
    // const { chapter } = nav.state.params;
    // console.log("this is subsections", chapter);
    return (
      <SafeAreaView style={{ marginTop: 10, backgroundColor: "#5FA6B9" }}>
        <ScrollView>
          <View>
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
              Week ??
            </Text>
            <Card>
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
                Time: 2 hours , 4 hours
              </Text>
            </Card>
            <Card>
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
                Topics
              </Text>
              <List>
                <ListItem
                  rightIcon={{ name: "lens", color: "pink" }}
                  //   key={task.key}
                  title={"stuff"}
                  subtitle={`Completed: eventually`}
                  //   subtitle={`Completed: ${task.assigned}`}
                  leftIcon={
                    <CheckBox
                      containerStyle={{
                        marginLeft: 0,
                        marginRight: 0,
                        borderWidth: 0,
                        backgroundColor: "white"
                      }}
                      checkedColor={"aqua"}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      //   checked={this.state[task.key]}
                      //   onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
                <ListItem
                  rightIcon={{ name: "lens", color: "aqua" }}
                  //   key={task.key}
                  title={"other thing"}
                  subtitle={`Completed: eventually`}
                  //   subtitle={`Completed: ${task.assigned}`}
                  leftIcon={
                    <CheckBox
                      containerStyle={{
                        marginLeft: 0,
                        marginRight: 0,
                        borderWidth: 0,
                        backgroundColor: "white"
                      }}
                      checkedColor={"aqua"}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      //   checked={this.state[task.key]}
                      //   onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
              </List>
            </Card>
            <Card>
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
                Chapters
              </Text>
              <List>
                <ListItem
                  rightIcon={{ name: "lens", color: "pink" }}
                  //   key={task.key}
                  title={"stuff"}
                  subtitle={`Completed: eventually`}
                  //   subtitle={`Completed: ${task.assigned}`}
                  leftIcon={
                    <CheckBox
                      containerStyle={{
                        marginLeft: 0,
                        marginRight: 0,
                        borderWidth: 0,
                        backgroundColor: "white"
                      }}
                      checkedColor={"aqua"}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      //   checked={this.state[task.key]}
                      //   onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
                <ListItem
                  rightIcon={{ name: "lens", color: "pink" }}
                  //   key={task.key}
                  title={"other thing"}
                  subtitle={`Completed: eventually`}
                  //   subtitle={`Completed: ${task.assigned}`}
                  leftIcon={
                    <CheckBox
                      containerStyle={{
                        marginLeft: 0,
                        marginRight: 0,
                        borderWidth: 0,
                        backgroundColor: "white"
                      }}
                      checkedColor={"aqua"}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      //   checked={this.state[task.key]}
                      //   onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
              </List>
            </Card>
            <Card>
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
                Pathways/Formulas
              </Text>
              <List>
                <ListItem
                  rightIcon={{ name: "lens", color: "pink" }}
                  //   key={task.key}
                  title={"stuff"}
                  subtitle={`Completed: eventually`}
                  //   subtitle={`Completed: ${task.assigned}`}
                  leftIcon={
                    <CheckBox
                      containerStyle={{
                        marginLeft: 0,
                        marginRight: 0,
                        borderWidth: 0,
                        backgroundColor: "white"
                      }}
                      checkedColor={"aqua"}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      //   checked={this.state[task.key]}
                      //   onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
                <ListItem
                  rightIcon={{ name: "lens", color: "pink" }}
                  //   key={task.key}
                  title={"other thing"}
                  subtitle={`Completed: eventually`}
                  //   subtitle={`Completed: ${task.assigned}`}
                  leftIcon={
                    <CheckBox
                      containerStyle={{
                        marginLeft: 0,
                        marginRight: 0,
                        borderWidth: 0,
                        backgroundColor: "white"
                      }}
                      checkedColor={"aqua"}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      //   checked={this.state[task.key]}
                      //   onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
              </List>
            </Card>
            {/* {chapter
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
              : null} */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default WeekScreen;
