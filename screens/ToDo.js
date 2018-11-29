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
    this.state = { marked: [] };

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
                  key={6}
                  checked={this.state.marked.includes(6)}
                  onPress={() => this.handleCheck(6)}
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
                  key={2}
                  checked={this.state.marked.includes(2)}
                  onPress={() => this.handleCheck(2)}
                />
              }
            />
          </List>
        </ScrollView>
      </View>
    );
  }
}
