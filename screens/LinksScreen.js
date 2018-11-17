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
//               title: "Basic Theory of Circulation Function",
//               contents: `Blood flow to the tissue is controlled in relation to the tissues in need
//         The cardiac output (CO) is controlled by the sum of all tissue flow
//         Arterial pressure is controlled independently of either local blood flow control of CO`
//             },
//             {
//               title: "Three Theories of Pulsatile Flow",
//               contents: `Energy Equivalent Pressure: Extra energy available to capillaries for patency \nCapillary Critical Closing Pressure\n Non-pulsatile = microcirculatory shunting, decrease blood flow
// \n Neuroendocrine Reflex Mechanism Effected by Baroreceptor Discharge\n Remains operative through non-pulsatile flow \n Therefore, there is improved tissue function\nLower afterload for ventricle at end of perfusion period\nLower level of vascular resistance\nNon-pulse flow: \n Progressive elevation in Systemic Vascular Resistance\n Renin-Angiotensin Activation\n Continues Post-CPB`
//             },
//             {
//               title: "Blood Information and its’ Pathways",
//               contents: `Blood flow to the tissue is controlled in relation to the tissues in need
//             The cardiac output (CO) is controlled by the sum of all tissue flow
//             Arterial pressure is controlled independently of either local blood flow control of CO`
//             },
//             {
//               title: "Basic Theory of Circulation Function",
//               contents: `Blood Components`,
//               text: `Plasma = 55% \nWater = 90%\nSolids = 10% (Proteins 6.5-8 g/dL and Carbs)\nFormed Elements = 45%
//               RBC, WBC, Plt`,
//               topic: "Newtonian Fluids",
//               content:
//                 "Water, saline, and plasma\nViscosity does not vary with shear rate"
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
