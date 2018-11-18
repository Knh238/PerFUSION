//grid and cards
//lottie
//animated pie chart
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
// import { List, ListItem } from "react-native-elements";
import { List, ListItem } from "native-base";
import { Button, ButtonGroup } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Icon } from "expo";
import { Icon } from "react-native-material-ui";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class ScheduleHomeScreen extends React.Component {
  //   static navigationOptions = {
  //     header: null
  //   };
  constructor() {
    super();
    this.state = {
      selectedChapterIndex: null,
      selectedTopicIndex: null
    };
    this.updateChapterIndex = this.updateChapterIndex.bind(this);
    this.updateTopicIndex = this.updateTopicIndex.bind(this);
  }
  updateChapterIndex(selectedChapterIndex) {
    this.setState({ selectedChapterIndex });
  }
  updateTopicIndex(selectedTopicIndex) {
    this.setState({ selectedTopicIndex });
  }
  render() {
    // const buttons = ["Hello", "World", "Buttons"];
    // const buttonsCh = ["Chapter 1", "Chapter 2", "Chapter3"];
    // const { selectedTopicIndex } = this.state;
    // const { selectedChapterIndex } = this.state;
    const nav = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff"
        }}
      >
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#fff"
          }}
          contentContainerStyle={{
            paddingTop: 30
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Image
              source={
                __DEV__
                  ? require("../assets/images/heart.png")
                  : require("../assets/images/heart.png")
              }
              style={{
                width: 50,
                height: 60,
                resizeMode: "contain",
                marginTop: 3,
                marginLeft: -10
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 28,
                color: "rgba(96,100,109, 1)",
                textAlign: "center",
                fontFamily: "patrick"
              }}
            >
              Review Schedule By Week
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "royalblue",
                textAlign: "center",
                fontFamily: "playfair"
              }}
            >
              Yeah.. this gonna take awhile!
            </Text>
            <Text
              style={{
                fontSize: 15,
                // color: "navy",
                textAlign: "center",
                // marginLeft: 40,
                fontFamily: "playfair"
              }}
            >
              {" "}
              6 weeks {"\n"} about 2 hours a day {"\n"} lots of content{"\n"}
            </Text>
            <Button
              buttonStyle={{
                backgroundColor: "#90CAF9",
                borderWidth: 0,
                borderRadius: 30,
                marginLeft: 35,
                marginRight: 35,
                marginTop: 10
              }}
              onPress={() => nav.navigate("Week")}
              title="Week 1"
            />
            <Button
              buttonStyle={{
                backgroundColor: "#42A5F5",
                borderWidth: 0,
                borderRadius: 30,
                marginLeft: 35,
                marginRight: 35,
                marginTop: 10
              }}
              title="Week 2!"
            />
            <Button
              // icon={<Icon name="arrow-right" size={15} color="white" />}
              buttonStyle={{
                backgroundColor: "#2196F3",
                borderWidth: 0,
                borderRadius: 30,
                marginLeft: 35,
                marginRight: 35,
                marginTop: 10
              }}
              // Icon="arrowright"
              title="Week 3"
              // rightIcon="arrow"
            />
            <Button
              // icon={<Icon name="arrow-right" size={15} color="white" />}
              buttonStyle={{
                backgroundColor: "#1E88E5",
                borderWidth: 0,
                borderRadius: 30,
                marginLeft: 35,
                marginRight: 35,
                marginTop: 10
              }}
              // Icon="arrowright"
              title="Week 4"
              // rightIcon="arrow"
            />
            <Button
              // icon={<Icon name="arrow-right" size={15} color="white" />}
              buttonStyle={{
                backgroundColor: "#1976D2",
                borderWidth: 0,
                borderRadius: 30,
                marginLeft: 35,
                marginRight: 35,
                marginTop: 10
              }}
              // Icon="arrowright"
              title="Week 5"
              // rightIcon="arrow"
            />
            <Button
              // icon={<Icon name="arrow-right" size={15} color="white" />}
              buttonStyle={{
                backgroundColor: "#1565C0",
                borderWidth: 0,
                borderRadius: 30,
                marginLeft: 35,
                marginRight: 35,
                marginTop: 10
              }}
              // Icon="arrowright"
              title="Week 6"
              // rightIcon="arrow"
            />
            {/* <ButtonGroup
              rounded
              raised
              textStyle={{
                color: "white",
                fontFamily: "roboto"
              }}
              buttonStyle={{
                borderWidth: 3,
                borderColor: "white"
              }}
              onPress={this.updateTopicIndex}
              selectedIndex={selectedTopicIndex}
              buttons={buttons}
              containerStyle={{
                height: 80,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: "#1976D2"
              }}
              selectedButtonStyle={{
                backgroundColor: "#00FA9A",
                color: "white"
              }}
            /> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}
