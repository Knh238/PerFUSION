import React, { Component } from "react";
import { ScrollView, SafeAreaView, Text, View } from "react-native";
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
import { Button, CheckBox, Icon } from "react-native-elements";
import { Card } from "react-native-material-ui";

class Profile extends Component {
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
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 24,
              color: "rgba(96,100,109, 1)",
              textAlign: "center",
              fontFamily: "space-mono"
            }}
          >
            {"\n"}Some font choices
          </Text>
          <List>
            <ListItem>
              <Text
                style={{
                  fontSize: 18,
                  //   color: "rgba(96,100,109, 1)",
                  textAlign: "left",
                  marginLeft: 20,
                  fontFamily: "playfair"
                }}
              >
                this is in playfair
              </Text>
            </ListItem>
            <ListItem>
              <Text
                style={{
                  fontSize: 18,
                  //   color: "rgba(96,100,109, 1)",
                  textAlign: "left",
                  marginLeft: 20,
                  fontFamily: "playfairBold"
                }}
              >
                this is in playfair bold
              </Text>
            </ListItem>
            <ListItem>
              <Text
                style={{
                  fontSize: 18,
                  //   color: "rgba(96,100,109, 1)",
                  textAlign: "left",
                  marginLeft: 20,
                  fontFamily: "roboto"
                }}
              >
                this is in roboto
              </Text>
            </ListItem>
            <ListItem>
              <Text
                style={{
                  fontSize: 18,
                  //   color: "rgba(96,100,109, 1)",
                  textAlign: "left",
                  marginLeft: 20,
                  fontFamily: "fira"
                }}
              >
                This is in fira regular
              </Text>
            </ListItem>
            <ListItem>
              <Text
                style={{
                  fontSize: 18,
                  //   color: "rgba(96,100,109, 1)",
                  textAlign: "left",
                  marginLeft: 20,
                  fontFamily: "firaBold"
                }}
              >
                This is in fira bold
              </Text>
            </ListItem>{" "}
            <ListItem>
              <Text
                style={{
                  fontSize: 18,
                  //   color: "rgba(96,100,109, 1)",
                  textAlign: "left",
                  marginLeft: 20,
                  fontFamily: "poppins"
                }}
              >
                This is in poppins
              </Text>
            </ListItem>
            <ListItem>
              <Text
                style={{
                  fontSize: 18,
                  //   color: "rgba(96,100,109, 1)",
                  textAlign: "left",
                  marginLeft: 20,
                  fontFamily: "rubik"
                }}
              >
                This is in rubik
              </Text>
            </ListItem>
            <ListItem>
              <Text
                style={{
                  fontSize: 18,
                  //   color: "rgba(96,100,109, 1)",
                  textAlign: "left",
                  marginLeft: 20,
                  fontFamily: "space-mono"
                }}
              >
                This is in space-mono
              </Text>
            </ListItem>
            <ListItem>
              <Text
                style={{
                  fontSize: 18,
                  //   color: "rgba(96,100,109, 1)",
                  textAlign: "left",
                  marginLeft: 20,
                  fontFamily: "patrick"
                }}
              >
                This is in patrick
              </Text>
            </ListItem>
            <ListItem>
              <Text
                style={{
                  fontSize: 18,
                  //   color: "rgba(96,100,109, 1)",
                  textAlign: "left",
                  marginLeft: 20,
                  fontFamily: "permanent-marker"
                }}
              >
                This is in permanent marker
              </Text>
            </ListItem>
            <ListItem
              icon
              title="3.3"
              onPress={() =>
                nav.navigate("ChapterThree", {
                  chapter: this.state.chapter
                })
              }
            >
              <Body>
                <Text style={{ fontFamily: "poppins" }}>chevron-right</Text>
              </Body>
              <Right>
                <Icon
                  //reverse
                  raised
                  name="chevron-right"
                  type="font-awesome"
                  color="royalblue"
                  size="15"
                  // onPress={() =>
                  //   nav.navigate("ChapterThree", {
                  //     chapter: this.state.chapter
                  //   })
                  // }
                />
              </Right>
            </ListItem>
            <ListItem
              icon
              style={{
                marginLeft: 0,
                paddingLeft: 10,
                backgroundColor: "#F2F2F2"
              }}
            >
              <Body>
                <Text style={{ fontFamily: "poppins" }}>
                  angle double right:
                </Text>
              </Body>
              <Right>
                <Icon
                  //reverse
                  raised
                  name="angle-double-right"
                  type="font-awesome"
                  color="royalblue"
                  size="15"
                  onPress={() => this.clickTwo()}
                />
              </Right>
            </ListItem>
            <ListItem
              icon
              title="3.1"
              onPress={() =>
                nav.navigate("ChapterThree", {
                  chapter: this.state.chapter
                })
              }
            >
              <Body>
                <Text style={{ fontFamily: "poppins" }}>caret right </Text>
              </Body>
              <Right>
                <Icon
                  reverse
                  raised
                  name="caret-right"
                  type="font-awesome"
                  color="royalblue"
                  size="15"
                  onPress={() =>
                    nav.navigate("ChapterThree", {
                      chapter: this.state.chapter
                    })
                  }
                />
              </Right>
            </ListItem>
          </List>
        </View>
      </ScrollView>
    );
  }
}
export default Profile;
