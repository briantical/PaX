import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  YellowBox
} from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";
import SplashScreen from "react-native-splash-screen";
import firebase from "react-native-firebase";

import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Profile from "./authentication/Profile";
import CheckinDetails from "./Home/pages/CheckinDetails";
import Home from "./Home/Home";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

type Props = {};
export default class Main extends Component<Props> {
  render() {
    return (
      <Router>
        <Stack>
          {/*<Scene
            key="login"
            component={Login}
            title="Login"
            hideNavBar={true}
          />
          <Scene
            key="signup"
            component={Signup}
            title="Signup"
            hideNavBar={true}
            renderBackButton={() => <View />}
          />
          <Scene
            key="profile"
            component={Profile}
            title="Profile"
            hideNavBar={true}
            renderBackButton={() => <View />}
          />*/}
          <Scene
            key="home"
            component={Home}
            title="Home"
            hideNavBar={true}
            renderBackButton={() => <View />}
          />
          <Scene
            key="checkindetails"
            component={CheckinDetails}
            title="CheckinDetails"
            hideNavBar={true}
            renderBackButton={() => <View />}
          />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
