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

export default class QuizHomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
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
    const buttons = ["Hello", "World", "Buttons"];
    const buttonsCh = ["Chapter 1", "Chapter 2", "Chapter3"];
    const { selectedTopicIndex } = this.state;
    const { selectedChapterIndex } = this.state;
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
              This will be your home page for quizzes{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "royalblue",
                textAlign: "center",
                fontFamily: "playfair"
              }}
            >
              It will have a series of buttons
            </Text>
            <Text
              style={{
                fontSize: 15,
                // color: "navy",
                // textAlign: "left",
                // marginLeft: 40,
                fontFamily: "playfair"
              }}
            >
              {" "}
              1.by chapter {"\n"} 2. or by topic{"\n"} 3. one maybe 'feeling
              lucky'or 'random/russian roulette option{"\n"}
            </Text>

            <ButtonGroup
              rounded
              raised
              textStyle={{ color: "white", fontFamily: "roboto" }}
              buttonStyle={{
                borderWidth: 3,
                borderColor: "white",
                backgroundColor: "#64B5F6"
              }}
              onPress={this.updateChapterIndex}
              selectedIndex={selectedChapterIndex}
              buttons={buttonsCh}
              containerStyle={{
                height: 80,
                marginLeft: 10,
                marginRight: 10
              }}
              selectedButtonStyle={{
                backgroundColor: "#00FA9A",
                color: "white"
              }}
            />
            <ButtonGroup
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
                // backgroundColor: "orange"
                backgroundColor: "#2196F3"
              }}
              selectedButtonStyle={{
                backgroundColor: "#00FA9A",
                color: "white"
              }}
            />
            <ButtonGroup
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
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
