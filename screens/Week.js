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
    this.state = { marked: [] };
    // this._mounted = false;
    // this.handleSubmit = this.handleSubmit.bind(this);

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
                color: "white",
                backgroundColor: "#90CAF9",
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
                  fontFamily: "playfair"
                }}
              >
                Lower priority:
              </Text>
              <Icon
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
                      key={11}
                      checkedColor={"#1E88E5"}
                      // checked={this.state[task.key]}
                      // onPress={() => this.handleCheck(task.key)}
                      checked={this.state.marked.includes(this.key)}
                      onPress={() => this.handleCheck(this.key)}
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
                      // checked={this.state[task.key]}
                      // onPress={() => this.handleCheck(task.key)}
                      key={3}
                      checked={this.state.marked.includes(3)}
                      onPress={() => this.handleCheck(3)}
                    />
                  }
                />
              </List>
            </Card>

            <Card>
              <Text
                style={{
                  fontSize: 22,
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
                      key={7}
                      checked={this.state.marked.includes(7)}
                      onPress={() => this.handleCheck(7)}
                      // checked={this.state[task.key]}
                      // onPress={() => this.handleCheck(task.key)}
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
                      key={9}
                      checked={this.state.marked.includes(9)}
                      onPress={() => this.handleCheck(9)}
                    />
                  }
                />
              </List>
            </Card>
            <Card>
              <Text
                style={{
                  fontSize: 22,
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
                      key={17}
                      checked={this.state.marked.includes(17)}
                      onPress={() => this.handleCheck(17)}
                    />
                  }
                />
              </List>
            </Card>
            <Card>
              <Text
                style={{
                  fontSize: 22,
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
                      key={19}
                      checked={this.state.marked.includes(19)}
                      onPress={() => this.handleCheck(19)}
                    />
                  }
                />
                <ListItem
                  rightIcon={{ name: "lens", color: "#ffea00" }}
                  //  key={task.key}
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
                      key={15}
                      checkedColor={"#1E88E5"}
                      checked={this.state.marked.includes(15)}
                      onPress={() => this.handleCheck(15)}
                      // checked={this.state[task.key]}
                      // onPress={() => this.handleCheck(task.key)}
                    />
                  }
                />
              </List>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default WeekScreen;
