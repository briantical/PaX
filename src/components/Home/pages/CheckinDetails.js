import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import Backdrop from "./Backdrop";

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

  render() {
    console.log(this.props.data);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>PaX</Text>
        </View>
        <View style={styles.subheader}>
          <Text style={styles.subheaderTitle}>
            THURSDAY, 14 AUGUST 2018, 03:15
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
              Makerere University Kampala
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
                  <Text>Main Gate</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <Text style={{ fontWeight: "bold", color: "#2F3C4C" }}>
                    TIME IN:{" "}
                  </Text>
                  <Text>15:00</Text>
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
                  <Text> _ _ _</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <Text style={{ fontWeight: "bold", color: "#2F3C4C" }}>
                    TIME OUT:{" "}
                  </Text>
                  <Text>_ _ : _ _</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.paymentDetails}>
            <View style={styles.details}>
              <Text style={styles.boldText}>DURATION :</Text>
              <Text>3:12:08:01</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.boldText}>AMOUNT DUE: Shs </Text>
              <Text>3,000</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.footer} onPress={this.showBackground}>
          <Text style={styles.footerTitle}>CONFIRM PAYMENT</Text>
        </TouchableOpacity>
        {!this.state.modalVisible ? null : <Backdrop visibility={true} />}
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
    justifyContent: "center",
    alignItems: "center",
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
