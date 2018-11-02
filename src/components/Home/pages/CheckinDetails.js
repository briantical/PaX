import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import Backdrop from "./Backdrop";
import { Actions } from "react-native-router-flux";

type Props = {};
export default class CheckinDetails extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  showBackground = () => {
    this.setState({ modalVisible: true });
  };

  endBackground = () => {
    this.setState({ modalVisible: false });
  };

  navigate = () => {
    Actions.popTo("home");
  };

  getDuration = () => {
    const entryTime = new Date(this.props.data.entryDate).getTime();
    let currentTime = 0;
    if (this.props.data.exitDate !== null) {
      currentTime = new Date(this.props.data.exitDate).getTime();
    } else {
      currentTime = new Date().getTime();
    }

    let hrDiff = (currentTime - entryTime) / 1000 / 3600;
    let minDiff = ((currentTime - entryTime) / 1000) % 60;
    let hrs = Math.abs(Math.round(hrDiff));
    let mins = Math.abs(Math.round(minDiff));
    return hrs + "Hrs " + mins + "mins";
  };
  render() {
    console.log(this.props.data);
    const { data } = this.props;
    console.log(data);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              flex: 2,
              alignItems: "center",
              height: "100%",
              justifyContent: "center"
            }}
            onPress={this.navigate}
          >
            <Icon name="arrow-back" color="#FFF" size={20} />
          </TouchableOpacity>
          <View style={{ flex: 8, alignItems: "center", paddingRight: 10 }}>
            <Text style={styles.headerTitle}>PaX</Text>
          </View>
        </View>
        <View style={styles.subheader}>
          <Text style={styles.subheaderTitle}>
            {new Date(data.entryDate).toDateString()}
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.venue}>
            <Icon name="location-on" color="#BF0000" size={11} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "#2F3C4C"
              }}
            >
              {data.venue}
            </Text>
          </View>
          <View style={styles.entryDetails}>
            <View style={styles.entry}>
              <View style={styles.entryIcon}>
                <View
                  style={{
                    borderRadius: 20,
                    height: 20,
                    width: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#00FF42"
                  }}
                >
                  <Icon name="arrow-forward" color="#FFF" size={15} />
                </View>
              </View>
              <View style={styles.entrytimes}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold", color: "#2F3C4C" }}>
                    ENTRY:{" "}
                  </Text>
                  <Text>{data.entryPoint}</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <Text style={{ fontWeight: "bold", color: "#2F3C4C" }}>
                    TIME IN:{" "}
                  </Text>
                  <Text>
                    {new Date(data.entryDate).toTimeString().slice(0, 8)}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.entry}>
              <View style={styles.entryIcon}>
                <View
                  style={{
                    borderRadius: 20,
                    height: 20,
                    width: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#BF0000"
                  }}
                >
                  <Icon name="arrow-back" color="#FFF" size={15} />
                </View>
              </View>
              <View style={styles.entrytimes}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold", color: "#2F3C4C" }}>
                    EXIT:{" "}
                  </Text>
                  <Text> {data.exitPoint}</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <Text style={{ fontWeight: "bold", color: "#2F3C4C" }}>
                    TIME OUT:{" "}
                  </Text>
                  <Text>
                    {data.exitDate == null
                      ? "still in"
                      : new Date(data.exitDate).toTimeString().slice(0, 8)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.paymentDetails}>
            <View style={styles.details}>
              <Text style={styles.boldText}>DURATION :</Text>
              <Text>{this.getDuration()}</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.boldText}>AMOUNT DUE: Shs </Text>
              <Text>{data.amountPaid}</Text>
            </View>
          </View>
        </View>
        {data.isPaid ? (
          <TouchableOpacity style={styles.footer} onPress={null}>
            <Text style={styles.footerTitle}>PAYMENT CONFIRMED</Text>
            <Text style={styles.footerTitle}>Thank You for using PaX!</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.footer} onPress={this.showBackground}>
            <Text style={styles.footerTitle}>CONFIRM PAYMENT</Text>
          </TouchableOpacity>
        )}
        {!this.state.modalVisible ? null : (
          <Backdrop
            visibility={true}
            theView={2}
            endVisibility={this.endBackground}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backDrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)"
  },
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  header: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#00AF66"
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 20
  },
  subheader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#00AF66"
  },
  subheaderTitle: {
    color: "#2F3C4C",
    fontSize: 11,
    fontWeight: "bold"
  },
  content: {
    flex: 7
  },
  venue: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#00AF66"
  },
  entryDetails: {
    flex: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#00AF66"
  },
  entry: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  entryIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  entrytimes: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  paymentDetails: {
    flex: 2
  },
  details: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginLeft: 40
  },
  boldText: {
    fontWeight: "bold",
    color: "#2F3C4C"
  },
  footer: {
    flex: 1,
    bottom: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#00AF66",
    justifyContent: "center",
    alignItems: "center"
  },
  footerTitle: {
    color: "#2F3C4C",
    fontWeight: "bold"
  }
});
