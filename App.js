import React, { Component } from "react";
import { StyleSheet, View, YellowBox } from "react-native";
import SplashScreen from "react-native-splash-screen";

import Index from "./src/components/Index";

YellowBox.ignoreWarnings(["Require cycle:"]);

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <Index />
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
