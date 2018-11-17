import React, { Component } from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import { Button, CheckBox, ListItem, List } from "react-native-elements";
import { Card } from "react-native-material-ui";

const Bullets = function(props) {
  //   console.log("props in bullets", props);
  const { notes } = props;
  return notes.map(item => {
    return <ListItem title={item} />;
  });
};
export default Bullets;
// class ChapterOne extends Component {
//     static navigationOptions = {
//       header: null
//     };
//     constructor(props) {
