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
import { Button } from "react-native-elements";
import LottieView from "lottie-react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Icon } from "expo";
import { Icon } from "react-native-material-ui";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
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
            paddingTop: 20
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
                width: 100,
                height: 80,
                resizeMode: "contain",
                marginTop: 3,
                marginLeft: -10
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 30,
                color: "rgba(96,100,109, 1)",
                textAlign: "center",
                fontFamily: "playfairBold"
              }}
            >
              A Comprehensive Cardiovascular Perfusion Study Guide
            </Text>
            <LottieView
              source={require("../assets/images/heart_rate.json")}
              //source={require("../assets/images/animated_laptop_.json")}
              autoPlay
              loop
            />
            <Text
              style={{
                marginTop: 30,
                fontSize: 18,
                color: "royalblue",
                textAlign: "center",
                fontFamily: "playfairBold"
              }}
            >
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              Ready to Study?
              {"\n"}
            </Text>
            <Button
              // icon={<Icon name="arrow-right" size={15} color="white" />}
              buttonStyle={{
                backgroundColor: "rgb(66, 194, 244)",
                borderWidth: 0,
                borderRadius: 30,
                // marginLeft: 35,
                // marginRight: 35,
                alignSelf: "center",
                marginTop: 10,
                width: "60%"
              }}
              center
              // Icon="arrowright"
              title="How to use this app"
              textStyle={{ fontFamily: "playfairBold" }}
              // rightIcon="arrow"
            />
            {/* <Icon name="arrowForward" /> */}
            {/* <Icon name="arrowright" /> */}
            {/* </Button> */}

            <TouchableOpacity
              onPress={this._handleHelpPress}
              style={{
                paddingVertical: 15
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#2e78b7",
                  textAlign: "center",
                  fontFamily: "playfairBold"
                }}
              >
                {"\n"}
                Buzzfeed link
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* <View style={  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  }}> */}
        {/* <Text style={{
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  }}>
            This is a tab bar. You can edit it in:
          </Text> */}

        {/* <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View> */}
        {/* </View> */}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync("https://www.buzzfeed.com");
  };
}

// const styles = StyleSheet.create({
//   developmentModeText: {
//     marginBottom: 20,
//     color: "rgba(0,0,0,0.4)",
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: "center"
//   }
// welcomeContainer: {
//   alignItems: "center",
//   marginTop: 10,
//   marginBottom: 20
// }
// getStartedContainer: {
//   alignItems: "center",
//   marginHorizontal: 50
// }
// homeScreenFilename: {
//   marginVertical: 7
// }
// codeHighlightText: {
//   color: "rgba(96,100,109, 0.8)"
// },
// codeHighlightContainer: {
//   backgroundColor: "rgba(0,0,0,0.05)",
//   borderRadius: 3,
//   paddingHorizontal: 4
// }

// navigationFilename: {
//   marginTop: 5
// }
// });
