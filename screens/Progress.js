//lottie
//animated pie chart
import React from "react";
import LottieView from "lottie-react-native";
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
          {/* <Icon
            raised
            name="pie-chart"
            type="font-awesome"
            color="royalblue"
            size="35"

            //   onPress={() =>
            //     nav.navigate("ChapterOne", {
            //       chapter: this.state.chapter
            //     })
            //   }
          /> */}
          <LottieView
            //source={require("../assets/images/dna_like_loader.json")}
            source={require("../assets/images/animated_laptop_.json")}
            autoPlay
            loop
          />
          <Text
            style={{
              fontSize: 25,
              color: "rgba(96,100,109, 1)",
              textAlign: "center",
              fontFamily: "permanent-marker"
            }}
          >
            A Pie-chart and other imagery will go here{"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>

          {/* <Icon
            raised
            reverse
            // style={{ marginTop: 30 }}
            name="line-chart"
            type="font-awesome"
            color="royalblue"
            size="35"
            //   onPress={() =>
            //     nav.navigate("ChapterOne", {
            //       chapter: this.state.chapter
            //     })
            //   }
          /> */}
          <Text
            style={{
              fontSize: 18,
              color: "#E040FB",
              textAlign: "center",
              fontFamily: "permanent-marker"
            }}
          >
            {"\n"}
            {"\n"}
            {"\n"}...Once I figure out how to: {"\n"}1. measure that{"\n"} 2.
            make the animation{"\n"}
          </Text>
          {/* <Icon
            raised
            name="pie-chart"
            type="font-awesome"
            color="royalblue"
            size="25"

            //   onPress={() =>
            //     nav.navigate("ChapterOne", {
            //       chapter: this.state.chapter
            //     })
            //   }
          /> */}
        </View>
      </ScrollView>
      /* </View> */
    );
  }
}
// import React from "react";
// import LottieView from "lottie-react-native";

// export default class ProgressScreen extends React.Component {
//   render() {
//     return (
//       <LottieView
//         source={require("../assets/images/dna_like_loader.json")}
//         autoPlay
//         loop
//       />
//     );
//   }
// }
