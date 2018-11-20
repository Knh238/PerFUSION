import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import {
  Button,
  CheckBox,
  ListItem,
  List,
  Icon,
  Card
} from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Icon } from "expo";
//import { Icon } from "react-native-material-ui";

import { LinearGradient } from "expo";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.handleSubmit = this.handleSubmit.bind(this);
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
    let task = {
      key: "hey",
      content: "Task",
      assigned: "person",
      color: "5FA6B9"
    };
    return (
      <View style={{ display: "flex" }}>
        <ScrollView>
          {/* <View> */}
          {/* <Card> */}
          <Text
            style={{
              fontSize: 28,
              // color: "rgba(96,100,109, 1)",
              color: "white",
              //backgroundColor: "#90CAF9",
              backgroundColor: "royalblue",
              textAlign: "center",
              fontFamily: "poppins",
              marginLeft: 10,
              marginRight: 10
            }}
          >
            To Do List:
          </Text>
          {/* </Card>
            <Card
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
              </Text> */}
          {/* <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: "white"
                }}
                wrap
              > */}
          {/* <Text
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
            </Card> */}
          {/* </View> */}
          {/* <Card> */}
          <List style={{ padding: 10 }}>
            <ListItem
              //rightIcon={{ name: "lens", color: "#" + task.color }}
              rightIcon={{
                name: "lens",
                color: "#ff9100",
                fontFamily: "playfair"
              }}
              key={task.key}
              title={"take some quizzes"}
              titleStyle={{ fontFamily: "playfair" }}
              subtitleStyle={{ fontFamily: "playfair" }}
              // title={task.content}
              subtitle={`Due: like YESTERDAY!`}
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
              rightIcon={{
                name: "lens",
                color: "#ff9100"
              }}
              key={task.key}
              title={"review all the things!"}
              titleStyle={{ fontFamily: "playfair" }}
              subtitle={`Due: like YESTERDAY!`}
              subtitleStyle={{ fontFamily: "playfair" }}
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
          {/* </Card> */}

          {/* </View> */}
        </ScrollView>
      </View>
    );
  }
}
