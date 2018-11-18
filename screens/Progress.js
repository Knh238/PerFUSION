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
import { Button, Icon } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Icon } from "expo";
// import { Icon } from "react-native-material-ui";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class ProgressScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
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
          {/* <Image
            source={
              __DEV__
                ? require("../assets/images/heart.png")
                : require("../assets/images/heart.png")
            }
            style={{
              width: 100,
              height: 80,
              resizeMode: "contain",
              marginTop: 3,
              marginLeft: -10
            }}
          /> */}

          <Text
            style={{
              fontSize: 25,
              color: "rgba(96,100,109, 1)",
              textAlign: "center",
              fontFamily: "permanent-marker"
            }}
          >
            A Pie-chart and other imagery will go here{"\n"}
          </Text>
          <Icon
            raised
            name="pie-chart"
            type="font-awesome"
            color="royalblue"
            size="65"

            //   onPress={() =>
            //     nav.navigate("ChapterOne", {
            //       chapter: this.state.chapter
            //     })
            //   }
          />
          <Icon
            raised
            reverse
            name="line-chart"
            type="font-awesome"
            color="royalblue"
            size="65"
            //   onPress={() =>
            //     nav.navigate("ChapterOne", {
            //       chapter: this.state.chapter
            //     })
            //   }
          />
          <Text
            style={{
              fontSize: 18,
              color: "#E040FB",
              textAlign: "center",
              fontFamily: "permanent-marker"
            }}
          >
            {"\n"}...Once I figure out how to: {"\n"}1. measure that{"\n"} 2.
            make the animation{"\n"}
          </Text>
        </View>
      </ScrollView>
      /* </View> */
    );
  }
}
