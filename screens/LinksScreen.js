import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import firebase from "../firebase";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

//adds totally new data or section/cahpter. can mass do this.
// function addData() {
//   let newKey;
//   let currentUser;

//   newKey = firebase
//     .database()
//     .ref("chapters/")
//     .push().key;
//   firebase
//     .database()
//     .ref("chapters/" + newKey)
//     .set({
//       title: 1,
//       subsections: [
//         {
//           num: 1,
//           sections: [
//             {
//               title: "Newtonian Fluids ",
//               contents: [`Water, saline, and plasma`,'Viscosity does not vary with shear rate']
//             },
//             {
//                title: "Non-Newtonian Fluids ",
//               contents: [`Blood (has formed elements),'Viscosity decreases with increase shear rate'] },
//             {
//               title: "Blood Types and Donating",
//
//               contents: [`Prevalence: \n  1. O+ = 38%, universal receiver  2.A+ = 34%  3. AB - = 1%, universal donor','Give to: \n  + to + \m  - to - or +','Receive from: \n  + to + or - \n - to -']
//             }
//           ]
//         },
//         { num: 2, sections: [{ title: "tbd", contents: "tbd" }] },
//         { num: 3, sections: [{ title: "tbd", contents: "tbd" }] }
//       ],
//       color: "aqua"
//     });
// }
// addData();

//how to add to existing array of values/subsections
//will need to manually loko up the index value in the database
//reference location is basically like a file location. and yest the - dahs does matter
// function addMoreData(dataObj, nextIndex) {
//   const newKey = nextIndex;
//   firebase
//     .database()
//     .ref("chapters/-LRU9y3vSSVlmxgkjUfT/subsections/0/sections/" + newKey)
//     .set(dataObj);
// }
// addMoreData(
//   {
//     title: "Blood Types and Donating",

//     contents: [
//       "Prevalence: \n  1. O+ = 38%, universal receiver  2.A+ = 34%  3. AB - = 1%, universal donor",
//       "Give to: \n  + to + m  - to - or +",
//       "Receive from: \n  + to + or - \n - to -"
//     ]
//   },
//   6
// );
