import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Checkins from "./pages/Checkins";

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Checkins />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
