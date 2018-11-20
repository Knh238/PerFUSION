import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Button, CheckBox, ListItem, List, Icon } from "react-native-elements";
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

  render() {
    const nav = this.props.navigation;
    //console.log(this.state);
    // console.log(
    //   "props in chapter one render",
    //   this.props.navigation.state.params.chapter
    // );
    // const { chapter } = nav.state.params;
    // console.log("this is subsections", chapter);
    let task = {
      key: "hey",
      content: "Task",
      assigned: "person",
      color: "5FA6B9"
    };
    return (
      <SafeAreaView style={{ marginTop: 10, backgroundColor: "greysmoke" }}>
        <ScrollView>
          <View
            style={{
              textAlign: "center",
              fontFamily: "playfair"
            }}
          >
            <Text
              style={{
                fontSize: 28,
                // color: "rgba(96,100,109, 1)",
                color: "white",
                backgroundColor: "#90CAF9",
                // backgroundColor: "royalblue",
                textAlign: "center",
                fontFamily: "playfairBold",
                marginLeft: 10,
                marginRight: 10
              }}
            >
              Week 1
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "rgba(96,100,109, 1)",
                backgroundColor: "white",
                textAlign: "center",
                fontFamily: "playfairBold",
                marginLeft: 10,
                marginRight: 10
              }}
            >
              Key:
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: "white"
              }}
              wrap
            >
              <Text
                style={{
                  fontSize: 13,
                  color: "rgba(96,100,109, 1)",
                  fontFamily: "playfair"
                }}
              >
                High priority:
              </Text>
              <Icon
                name="lens"
                type="materialIcons"
                color="#ff1744"
                onPress={() => this.clickTwo()}
              />

              <Text
                style={{
                  fontSize: 13,
                  color: "rgba(96,100,109, 1)",
                  // color: "white",
                  fontFamily: "playfair"
                }}
              >
                Pretty important:
              </Text>
              <Icon
                style={{ marginRight: 5 }}
                name="lens"
                type="materialIcons"
                color="#ff9100"
                onPress={() => this.clickTwo()}
              />

              <Text
                style={{
                  fontSize: 13,
                  color: "rgba(96,100,109, 1)",
                  //color: "white",
                  // backgroundColor: "royalblue",
                  // textAlign: "center",
                  // justifyContent: "right",
                  fontFamily: "playfair"
                }}
              >
                Lower priority:
              </Text>
              <Icon
                // style={{ justifyContent: "flex-end" }}
                name="lens"
                type="materialIcons"
                color="#ffea00"
                onPress={() => this.clickTwo()}
              />
            </View>
            <Card>
              <Text
                style={{
                  fontSize: 20,
                  // color: "rgba(96,100,109, 1)",
                  color: "white",
                  backgroundColor: "#42A5F5",
                  textAlign: "center",
                  fontFamily: "playfairBold"
                }}
              >
                {" "}
                Time Estimate:
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "rgba(96,100,109, 1)",
                  // color: "white",
                  backgroundColor: "white",
                  textAlign: "center",
                  fontFamily: "playfair"
                }}
              >
                Monday-Fridy: 2 hours a day {"\n"}
                Saturday & Sunday: 4 hours a day
              </Text>
            </Card>
            <Card>
              <Text
                style={{
                  fontSize: 22,
                  // color: "rgba(96,100,109, 1)",
                  color: "white",
                  backgroundColor: "#2196F3",
                  textAlign: "center",
                  fontFamily: "playfair"
                }}
              >
                Topics
              </Text>
              <List>
                <ListItem
                  rightIcon={{ name: "lens", color: "#ff1744" }}
                  //   key={task.key}
                  fontFamily="playfair"
                  title={"stuff"}
                  subtitle={`Completed: eventually`}
                  //   subtitle={`Completed: ${task.assigned}`}
                  leftIcon={
                    <CheckBox
                      containerStyle={{
                        marginLeft: 0,
                        marginRight: 0,
                        borderWidth: 0,
                        backgroundColor: "white",
                        fontFamily: "playfair"
                      }}
                      checkedColor={"#1E88E5"}
                      // checkedIcon="dot-circle-o"
                      // uncheckedIcon="circle-o"
                      checked={this.state[task.key]}
                      onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
                <ListItem
                  rightIcon={{ name: "lens", color: "#ff9100" }}
                  //   key={task.key}
                  fontFamily="playfair"
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
                      checkedColor={"#1E88E5"}
                      // checkedIcon="dot-circle-o"
                      // uncheckedIcon="circle-o"
                      checked={this.state[task.key]}
                      onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
              </List>
            </Card>

            <Card>
              <Text
                style={{
                  fontSize: 22,
                  // color: "rgba(96,100,109, 1)",
                  color: "white",
                  backgroundColor: "#1E88E5",
                  textAlign: "center",
                  fontFamily: "playfair"
                }}
              >
                Pathways & Formulas
              </Text>
              <List>
                <ListItem
                  rightIcon={{ name: "lens", color: "#ff1744" }}
                  //   key={task.key}
                  fontFamily="playfair"
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
                      checkedColor={"#1E88E5"}
                      // checkedIcon="dot-circle-o"
                      // uncheckedIcon="circle-o"
                      checked={this.state[task.key]}
                      onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
                <ListItem
                  rightIcon={{ name: "lens", color: "#ff9100" }}
                  //   key={task.key}
                  fontFamily="playfair"
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
                      checkedColor={"#1E88E5"}
                      // checkedIcon="dot-circle-o"
                      // uncheckedIcon="circle-o"
                      checked={this.state[task.key]}
                      onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
              </List>
            </Card>
            <Card>
              <Text
                style={{
                  fontSize: 22,
                  // color: "rgba(96,100,109, 1)",
                  color: "white",
                  backgroundColor: "#1976D2",
                  textAlign: "center",
                  fontFamily: "playfair"
                }}
              >
                Study Guide
              </Text>
              <List>
                <ListItem
                  rightIcon={{ name: "lens", color: "#ff9100" }}
                  fontFamily="playfair"
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
                      checkedColor={"#1E88E5"}
                      // checkedIcon="dot-circle-o"
                      // uncheckedIcon="circle-o"
                      checked={this.state[task.key]}
                      onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
              </List>
            </Card>
            <Card>
              <Text
                style={{
                  fontSize: 22,
                  // color: "rgba(96,100,109, 1)",
                  color: "white",
                  backgroundColor: "#1565C0",
                  textAlign: "center",
                  fontFamily: "playfair"
                }}
              >
                Recommended Reading:
              </Text>
              <List>
                <ListItem
                  rightIcon={{ name: "lens", color: "#ffea00" }}
                  //   key={task.key}
                  fontFamily="playfair"
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
                      checkedColor={"#1E88E5"}
                      // checkedIcon="dot-circle-o"
                      // uncheckedIcon="circle-o"
                      checked={this.state[task.key]}
                      onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
                <ListItem
                  rightIcon={{ name: "lens", color: "#ffea00" }}
                  //   key={task.key}
                  title={"other thing"}
                  fontFamily="playfair"
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
                      checkedColor={"#1E88E5"}
                      // checkedIcon="dot-circle-o"
                      // uncheckedIcon="circle-o"
                      checked={this.state[task.key]}
                      onPress={() => this.handleCheck(task.key)}
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
