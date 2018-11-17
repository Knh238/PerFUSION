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

import { Button, CheckBox, ListItem, List } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Icon } from "expo";
import { Icon } from "react-native-material-ui";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

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
      <View>
        <List>
          <ListItem
            rightIcon={{ name: "lens", color: "#" + task.color }}
            key={task.key}
            title={task.content}
            subtitle={`Assigned: ${task.assigned}`}
            leftIcon={
              <CheckBox
                containerStyle={{
                  marginLeft: 0,
                  marginRight: 0,
                  borderWidth: 0,
                  backgroundColor: "white"
                }}
                checkedColor={"#" + task.color}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state[task.key]}
                onPress={() => this.handleCheck(task.key)}
              />
            }
          />
        </List>
      </View>
    );
  }
}