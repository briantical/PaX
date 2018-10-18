import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import SplashScreen from "react-native-splash-screen";

type Props = {};
export default class CheckinDetails extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.text}</Text>
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
