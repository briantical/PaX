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

import About from "./Home/pages/About";
import UserRating from "./Home/pages/UserRating";
import UserProfile from "./Home/pages/UserProfile";
import UserShare from "./Home/pages/UserShare";
import Settings from "./Home/pages/Settings";

import Direct from "./Routing/Direct";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene
            key="home"
            component={Home}
            title="Home"
            hideNavBar={true}
            renderBackButton={() => <View />}
          />
          <Scene
            key="direct"
            component={Direct}
            title="Direct"
            hideNavBar={true}
            renderBackButton={() => <View />}
          />
          <Scene
            key="login"
            component={Login}
            title="Login"
            hideNavBar={true}
            renderBackButton={() => <View />}
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
          <Scene
            key="userprofile"
            component={UserProfile}
            title="UserProfile"
            hideNavBar={true}
            renderBackButton={() => <View />}
          />
          <Scene
            key="userrating"
            component={UserRating}
            title="UseRating"
            hideNavBar={true}
            renderBackButton={() => <View />}
          />
          <Scene
            key="usershare"
            component={UserShare}
            title="UserShare"
            hideNavBar={true}
            renderBackButton={() => <View />}
          />
          <Scene
            key="settings"
            component={Settings}
            title="Settings"
            hideNavBar={true}
            renderBackButton={() => <View />}
          />
          <Scene
            key="about"
            component={About}
            title="About"
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
