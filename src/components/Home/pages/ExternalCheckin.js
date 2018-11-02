import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

type Props = {};
export default class App extends Component<Props> {
  cancel = () => {
    this.props.endDisplay();
  };

  confirm = () => {
    this.props.endDisplay();
    Actions.newcheckin({ text: "hello world" });
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "#2F3C4C", fontSize: 25, fontWeight: "bold" }}>
            Make other vehicle payment
          </Text>
          <Text style={{ color: "#2F3C4C", fontSize: 40, fontWeight: "bold" }}>
            ?
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.theButtons} onPress={this.confirm}>
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>CONFIRM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.theButtons} onPress={this.cancel}>
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>CANCEL</Text>
          </TouchableOpacity>
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
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  theButtons: {
    width: 80,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#00AF66",
    justifyContent: "center",
    alignItems: "center"
  }
});
