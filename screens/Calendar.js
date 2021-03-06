import React from "react";
import { Calendar } from "react-native-calendars"; // 1.5.3
import { View, Text } from "react-native";
import { List, ListItem, Body, Right, Left } from "native-base";
import { Avatar, Divider, Icon } from "react-native-elements";
import moment from "moment";
var firebase = require("firebase");
// import EventList from "./EventList";

export default class CalendarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selected: {},
      curMonth: 0,
      curItems: []
    };
    this._mounted = false;
  }

  static navigationOptions = {
    header: null
  };

  // componentDidMount() {
  //   this._mounted = true;
  //   const user = firebase.auth().currentUser;
  //   var self = this;
  //   const ref = firebase.database().ref();
  //   ref.on("value", function(snapshot) {
  //     const projects = snapshot.val().projects;
  //     let userProjects = [];
  //     for (var key in projects) {
  //       if (projects[key].members) {
  //         const members = projects[key].members;
  //         if (members.includes(user.email)) {
  //           userProjects.push("" + key);
  //         }
  //       }
  //     }
  //     const events = snapshot.val().events;
  //     let userEvents = [];
  //     let marked = {};
  //     for (var id in events) {
  //       if (events[id]) {
  //         const projectId = "" + events[id].projectId;
  //         if (userProjects.includes(projectId)) {
  //           userEvents.push({ ...events[id], key: id });
  //           const color = events[id].color;
  //           const date = events[id].date.dateString;
  //           marked[date] = { selectedColor: "#" + color, selected: true };
  //         }
  //       }
  //     }
  //     const now = new Date();
  //     const curMonth = now.getMonth() + 1;
  //     let curItems = [];
  //     userEvents.map(event => {
  //       if (event.date.month === curMonth) {
  //         curItems.push(event);
  //       }
  //     });
  //     self.setState({
  //       items: userEvents,
  //       selected: marked,
  //       curMonth,
  //       curItems
  //     });
  //   });
  // }

  componentWillMount() {
    this._mounted = false;
  }

  handleMonthChange(date) {
    let curItems = [];
    this.state.items.map(item => {
      if ("" + item.date.month === "" + date.month) {
        curItems.push(item);
      }
    });
    this.setState({ curMonth: date.month, curItems });
  }

  getMonth(num) {
    const months = [
      "nothing",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return months[num];
  }

  render() {
    const examDates = ["2018-11-10", "2018-12-10", "2019-01-10", "2019-02-10"];
    // const today = new Date();
    const today = moment()
      .format()
      .slice(0, 10);
    console.log("today in this", today);
    //moment().format();
    // console.log("today as utc string", today.slice(3, 15));
    return (
      <View style={{ height: 600 }}>
        <Calendar
          items={this.state.items}
          minDate="2018-10-10"
          maxDate="2019-01-30"
          renderKnob={() => {
            return <View />;
          }}
          rowHasChanged={(r1, r2) => {
            return r1.name !== r2.name;
          }}
          markedDates={this.state.selected}
          onMonthChange={date => this.handleMonthChange(date)}
        />
        {this.state.items.length ? (
          <EventList
            curMonth={this.getMonth(this.state.curMonth)}
            curEvents={this.state.curItems}
          />
        ) : null}
        <List>
          <Text
            style={{
              fontSize: 28,
              color: "rgba(96,100,109, 1)",
              textAlign: "center",
              fontFamily: "playfair"
            }}
          >
            {" "}
            Upcoming Test Dates
          </Text>
          {examDates.map(test => (
            <ListItem icon>
              <Left>
                <Icon
                  // raised
                  name="circle"
                  type="font-awesome"
                  //color={moment(`${test}`).fromNow() <= 0 ? "red" : "royalblue"}
                  // color={today - `${test}` < 0 ? "red" : "royalblue"}
                  color="royalblue"
                  size="20"
                  onPress={() =>
                    nav.navigate("ChapterOne", {
                      chapter: this.state.chapter
                    })
                  }
                />
              </Left>
              <Body>
                <Text
                  style={{
                    fontSize: 18,
                    color: "rgba(96,100,109, 1)",
                    // textAlign: "center",
                    fontFamily: "playfair"
                  }}
                >
                  {test}
                </Text>
              </Body>
              <Right>
                <Text
                  style={{
                    fontSize: 14,
                    // color: "rgba(96,100,109, 1)",
                    color: "#1565C0",
                    // textAlign: "center",
                    fontFamily: "permanent-marker"
                  }}
                >
                  {moment(`${test}`).fromNow()}
                </Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}
