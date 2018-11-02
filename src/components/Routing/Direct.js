import React, { Component } from "react";
import { StyleSheet, View, Text} from "react-native";


type Props = {};
export default class Direct extends Component<Props> {
  componentDidMount() {   
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Directions</Text>
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
