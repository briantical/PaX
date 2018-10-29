import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { List, ListItem, Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";

let _data = [
  {
    numberPlate: "UAX 345D",
    entryPoint: "Main gate",
    exitPoint: "Western gate",
    timein: "15:00",
    timeout: "still in",
    venue: "Makerere University",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UBD 345D",
    entryPoint: "Gate E",
    exitPoint: "Gate F",
    timein: "10:00",
    timeout: "17:00",
    venue: "EBB Airport",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UAX 345D",
    entryPoint: "Main gate",
    exitPoint: "Western gate",
    timein: "15:00",
    timeout: "17:00",
    venue: "Makerere University",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UBD 345D",
    entryPoint: "Gate E",
    exitPoint: "Gate F",
    timein: "10:00",
    timeout: "17:00",
    venue: "EBB Airport",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UAX 345D",
    entryPoint: "Main gate",
    exitPoint: "Western gate",
    timein: "15:00",
    timeout: "17:00",
    venue: "Makerere University",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UBD 345D",
    entryPoint: "Gate E",
    exitPoint: "Gate F",
    timein: "10:00",
    timeout: "17:00",
    venue: "EBB Airport",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UAX 345D",
    entryPoint: "Main gate",
    exitPoint: "Western gate",
    timein: "15:00",
    timeout: "17:00",
    venue: "Makerere University",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UBD 345D",
    entryPoint: "Gate E",
    exitPoint: "Gate F",
    timein: "10:00",
    timeout: "17:00",
    venue: "EBB Airport",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UAX 345D",
    entryPoint: "Main gate",
    exitPoint: "Western gate",
    timein: "15:00",
    timeout: "17:00",
    venue: "Makerere University",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UBD 345D",
    entryPoint: "Gate E",
    exitPoint: "Gate F",
    timein: "10:00",
    timeout: "17:00",
    venue: "EBB Airport",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UAX 345D",
    entryPoint: "Main gate",
    exitPoint: "Western gate",
    timein: "15:00",
    timeout: "17:00",
    venue: "Makerere University",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UBD 345D",
    entryPoint: "Gate E",
    exitPoint: "Gate F",
    timein: "10:00",
    timeout: "17:00",
    venue: "EBB Airport",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UAX 345D",
    entryPoint: "Main gate",
    exitPoint: "Western gate",
    timein: "15:00",
    timeout: "17:00",
    venue: "Makerere University",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UBD 345D",
    entryPoint: "Gate E",
    exitPoint: "Gate F",
    timein: "10:00",
    timeout: "17:00",
    venue: "EBB Airport",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UAX 345D",
    entryPoint: "Main gate",
    exitPoint: "Western gate",
    timein: "15:00",
    timeout: "17:00",
    venue: "Makerere University",
    venuePic: require("../../../assets/avatar.png")
  },
  {
    numberPlate: "UBD 345D",
    entryPoint: "Gate E",
    exitPoint: "Gate F",
    timein: "10:00",
    timeout: "17:00",
    venue: "EBB Airport",
    venuePic: require("../../../assets/avatar.png")
  }
];

class Checkins extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const paxUrl = "http://localhost:3000/api/users";
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: _data,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.log("No internet connection");
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#00AF66"
        }}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  navigate = () => {
    Actions.checkindetails({ text: "hello world" });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>PaX</Text>
        </View>
        <List
          containerStyle={{
            flex: 9,
            marginTop: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0
          }}
        >
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => Actions.checkindetails({ data: item })}
              >
                <ListItem
                  subtitle={
                    <View style={{ marginLeft: 10 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center"
                        }}
                      >
                        <Icon name="location-on" color="#BF0000" size={11} />
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#2F3C4C"
                          }}
                        >
                          {item.venue}
                        </Text>
                      </View>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {item.numberPlate}
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#2F3C4C"
                            }}
                          >
                            Entry Point:
                          </Text>
                          <Text style={{ fontWeight: "normal" }}>
                            {item.entryPoint}
                          </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#2F3C4C"
                            }}
                          >
                            Time in:
                          </Text>
                          <Text
                            style={{ fontWeight: "normal", paddingLeft: 5 }}
                          >
                            {item.timein}
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#2F3C4C"
                            }}
                          >
                            Exit Point:
                          </Text>
                          <Text style={{ fontWeight: "normal" }}>
                            {item.exitPoint}
                          </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#2F3C4C"
                            }}
                          >
                            Time out:
                          </Text>
                          <Text
                            style={{ fontWeight: "normal", paddingLeft: 5 }}
                          >
                            {item.timeout}
                          </Text>
                        </View>
                      </View>
                    </View>
                  }
                  containerStyle={{ borderBottomWidth: 0, height: 120 }}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.numberPlate}
            ItemSeparatorComponent={this.renderSeparator}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={50}
          />
        </List>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00AF66"
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 20
  }
});
export default Checkins;
