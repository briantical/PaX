"use strict";

import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";

export default class NewCheckin extends Component {
  onSuccess(e) {
    Linking.openURL(e.data).catch(err =>
      console.error("An error occured", err)
    );
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={<Text style={styles.centerText}>PAX</Text>}
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>SCAN CARD</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#FFF",
    backgroundColor: "#00AF66"
  },
  textBold: {
    fontWeight: "500",
    color: "#000"
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  },
  buttonTouchable: {
    padding: 16
  }
});
