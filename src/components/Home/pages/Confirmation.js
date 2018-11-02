import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import QRCode from "react-native-qrcode";
import { Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";

const qrCodeData = {
  exitPoint: "still in",
  venue: "State House UG",
  timeIn: "13:00",
  timeOut: "--:--",
  duration: 0,
  entryPoint: "Gate A",
  vehicle: "UAX 555G",
  owner: false,
  isOut: false,
  isPaid: false,
  amountPaid: 3000,
  entryDate: "Thr Nov 1 2018 13:54:39 GMT+0300 (E. Africa Standard Time)"
};

type Props = {};
export default class Confirmation extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text_input: "",
      text_output: ""
    };
  }

  getTextInputValue = () => {
    this.setState({ text_output: this.state.text_input });
  };

  navigate = () => {
    Actions.popTo("home");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              flex: 2,
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={this.navigate}
          >
            <Icon name="arrow-back" color="#FFF" size={20} />
          </TouchableOpacity>
          <View style={{ flex: 8, alignItems: "center", paddingRight: 10 }}>
            <Text style={styles.headerTitle}>PaX</Text>
          </View>
        </View>
        <View style={styles.qrcode}>
          <QRCode
            value="http://172.20.10.2:3000/api/users/lutbrianivan@gmail.com"
            size={250}
            bgColor="#2F3C4C"
            fgColor="#FFF"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  qrcode: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center"
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
  }
});
