import React, { Component } from "react";
import { View, DrawerLayoutAndroid, StyleSheet } from "react-native";
import Checkins from "./pages/Checkins";
import Drawer from "./pages/Drawer";
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => <Drawer />}
        >
          <Checkins />
        </DrawerLayoutAndroid>
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
