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

class Bullets extends Component {
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
        <ListItem title={item}>
          <Text
            style={{
              fontSize: 18,
              //   color: "rgba(96,100,109, 1)",
              textAlign: "left",
              marginLeft: 20,
              fontFamily: "playfairBold"
            }}
          >
            {item}
          </Text>
        </ListItem>
      ))
      //   </List>
    );
  }
}
export default Bullets;
// class ChapterOne extends Component {
//     static navigationOptions = {
//       header: null
//     };
//     constructor(props) {
