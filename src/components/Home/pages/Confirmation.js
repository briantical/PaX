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
            style={{ flex: 2, alignItems: "center" }}
            onPress={this.navigate}
          >
            <Icon name="arrow-back" color="#FFF" size={20} />
          </TouchableOpacity>
          <View style={{ flex: 8, alignItems: "center", paddingRight: 10 }}>
            <Text style={styles.headerTitle}>PaX</Text>
          </View>
        </View>
        <View style={styles.qrcode}>
          <QRCode value="Brian" size={250} bgColor="#2F3C4C" fgColor="#FFF" />
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
