import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";

export default class About extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>PaX</Text>
        </View>
        <View style={styles.otherContent}>
          <View style={styles.drawerPageTitle}>
            <Text style={styles.textTitle}>About</Text>
            <Icon name="info" color="#2F3C4C" size={25} />
          </View>
          <View style={styles.theReminder}>
            <View style={{ padding: 10 }}>
              <Text>
                {" "}
                PaX is a result of a project assigned by Dr Miremebe Drake as a
                class assignment
              </Text>
              <Text> It was developed by :</Text>
              <View
                style={{
                  alignItems: "space-around",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: 50
                }}
              >
                <Text style={styles.textTitle2}> Lutaaya Brian Ivan</Text>
                <Text> I </Text>
                <Text style={styles.textTitle2}> Tulinawe Collins</Text>
                <Text> I </Text>
                <Text style={styles.textTitle2}> Vincent Sebintu</Text>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={require("./../../../assets/lutaaya.jpg")}
                    style={{ height: 60, width: 60, borderRadius: 60 }}
                  />
                </View>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("./../../../assets/lutaaya.jpg")}
                    style={{ height: 60, width: 60, borderRadius: 60 }}
                  />
                </View>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("./../../../assets/lutaaya.jpg")}
                    style={{ height: 60, width: 60, borderRadius: 60 }}
                  />
                </View>
              </View>
              <View>
                <Text>The code is available on GitHub</Text>
              </View>
            </View>
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
    paddingRight: 20,
    fontWeight: "bold"
  },
  textTitle2: {
    color: "#2F3C4C",
    fontSize: 15,
    fontWeight: "bold"
  },
  theReminder: {
    color: "#2F3C4C",
    flex: 9
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 60,
    borderColor: "#2F3C4C",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
