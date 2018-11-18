import React, { Component } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import {
  Container,
  Header,
  Content,
  Body,
  //   List,
  //   ListItem,
  Footer,
  Left,
  Right
} from "native-base";

import {
  Button,
  CheckBox,
  ListItem,
  List,
  Text,
  Card
} from "react-native-elements";
// import { Button, CheckBox } from "react-native-elements";
// import { Card } from "react-native-material-ui";

class Bullets2 extends Component {
  constructor(props) {
    super(props);
    this.state = { points: this.props.points };
  }

  render() {
    // console.log("props in bullets", props);
    console.log("props on state in bullets", this.state.points);
    const { points } = this.props;
    return (
      //   <List>
      this.state.points.map(item => (
        // return (
        <ListItem
          title={item}
          // subtitle="This is a very long subtitle that goes well beyond one line"
          titleNumberOfLines={20}
          // subtitleNumberOfLines={3}
          hideChevron
          titleStyle={{ display: "flex", fontFamily: "space-mono" }}
        />
      ))
    );
  }
}
export default Bullets2;
