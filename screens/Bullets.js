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

const Bullets = function(props) {
  //   console.log("props in bullets", props);
  const { notes } = props;
  return notes.map(item => {
    return (
      <ListItem title={item}>
        <Text>item</Text>
      </ListItem>
    );
  });
};
export default Bullets;
// class ChapterOne extends Component {
//     static navigationOptions = {
//       header: null
//     };
//     constructor(props) {
