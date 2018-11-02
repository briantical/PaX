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

import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Profile from "./authentication/Profile";
import CheckinDetails from "./Home/pages/CheckinDetails";
import Confirmation from "./Home/pages/Confirmation";
import NewCheckin from "./Home/pages/NewCheckin";
import Home from "./Home/Home";
import Direct from './Routing/Direct'

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
        <Scene
            key="direct"
            component={Direct}
            title="Direct"
            hideNavBar={true}
          />
          <Scene
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
          />
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
          <Scene
            key="confirmation"
            component={Confirmation}
            title="confirmation"
            hideNavBar={true}
            renderBackButton={() => <View />}
          />
          <Scene
            key="newcheckin"
            component={NewCheckin}
            title="newcheckin"
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
