import React, { Component } from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import {
  Container,
  Header,
  Content,
  Body,
  List,
  ListItem,
  Footer,
  Left,
  Right
} from "native-base";
import { Button, CheckBox } from "react-native-elements";
import { Card } from "react-native-material-ui";

class Bullets3 extends Component {
  constructor(props) {
    super(props);
    this.state = { points: this.props.points };
  }

  render() {
    // console.log("props in bullets", props);
    //console.log("props on state in bullets3", this.state.points);
    const { points } = this.props;
    return (
      //   <List>
      this.state.points.map(item => (
        // return (
        <ListItem title={item}>
          <Text
            style={{
              fontSize: 16,
              //   color: "rgba(96,100,109, 1)",
              // textAlign: "left",
              // marginLeft: 20,
              fontFamily: "fira"
            }}
          >
            {item}
          </Text>
        </ListItem>
      ))
    );
  }
}
export default Bullets3;
