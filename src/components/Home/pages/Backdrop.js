import React, { Component } from "react";
import {
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Button
} from "react-native";
import { Actions } from "react-native-router-flux";
import PaymentOptions from "./PaymentOptions";
import ExternalCheckin from "./ExternalCheckin";

type Props = {};
export default class Backdrop extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.visibility
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  show = index => {
    switch (index) {
      case 1:
        return <ExternalCheckin endDisplay={this.props.endVisibility} />;
      case 2:
        return <PaymentOptions endDisplay={this.props.endVisibility} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.props.endVisibility();
        }}
      >
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.endBackdrop}
            onPress={() => {
              this.props.endVisibility();
            }}
          />
          <View style={styles.contentOptions}>
            {this.show(this.props.theView)}
          </View>
          <TouchableOpacity
            style={styles.endBackdrop}
            onPress={() => {
              this.props.endVisibility();
            }}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  endBackdrop: {
    width: "100%",
    flex: 3,
    backgroundColor: "transparent"
  },
  contentOptions: {
    width: "100%",
    flex: 4,
    backgroundColor: "#FFF"
  }
});
