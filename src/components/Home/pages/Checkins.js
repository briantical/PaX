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
import Backdrop from "./Backdrop";

class Checkins extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      modalVisible: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const paxUrl = "http://192.168.137.1:3000/api/users/lutbrianivan@gmail.com";
    this.setState({ loading: true });

    fetch(paxUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.checkins,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.log("THE ERROR:" + error);
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

  showBackground = () => {
    this.setState({ modalVisible: true });
  };

  endBackground = () => {
    this.setState({ modalVisible: false });
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
                        {item.vehicle}
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
                            {new Date(item.entryDate)
                              .toTimeString()
                              .slice(0, 8)}
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
                            {item.exitDate == null
                              ? "still in"
                              : new Date(item.exitDate)
                                  .toTimeString()
                                  .slice(0, 8)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  }
                  containerStyle={{ borderBottomWidth: 0, height: 120 }}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item._id}
            ItemSeparatorComponent={this.renderSeparator}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={50}
          />
        </List>
        <TouchableOpacity style={styles.fab} onPress={this.showBackground}>
          <Text
            style={{
              color: "#FFF",
              fontSize: 60,
              alignSelf: "center",
              paddingBottom: 5
            }}
          >
            +
          </Text>
        </TouchableOpacity>
        {!this.state.modalVisible ? null : (
          <Backdrop
            visibility={true}
            theView={1}
            endVisibility={this.endBackground}
          />
        )}
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
  },
  fab: {
    bottom: 30,
    right: 20,
    position: "absolute",
    height: 70,
    width: 70,
    backgroundColor: "#00AF66",
    borderRadius: 70,
    borderWidth: StyleSheet.hairlinewidth,
    justifyContent: "space-around",
    alignItems: "center"
  }
});
export default Checkins;
