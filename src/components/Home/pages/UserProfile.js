import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";

export default class UserProfile extends Component {
  componentDidMount() {}

  onSubmit = () => {
    firebase
      .auth()
      .signOut()
      .then(Actions.login())
      .catch(error => console.log(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>PaX</Text>
        </View>
        <View style={styles.otherContent}>
          <View style={styles.drawerPageTitle}>
            <Text style={styles.textTitle}>Profile</Text>
            <Icon name="person-outline" color="#2F3C4C" size={25} />
          </View>
          <View style={styles.theReminder}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 40,
                borderRadius: 40,
                backgroundColor: "#00AF66",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold"
                }}
                onPress={this.onSubmit}
              >
                SIGN OUT
              </Text>
            </TouchableOpacity>
          </View>
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
  header: {
    minHeight: 60,
    maxHeight: 60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00AF66",
    flexDirection: "row"
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 20
  },
  otherContent: {
    flex: 9
  },
  drawerPageTitle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#2F3C4C"
  },
  textTitle: {
    color: "#2F3C4C",
    fontSize: 15,
    paddingRight: 20
  },
  theReminder: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center"
  }
});
