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

type Props = {};
export default class Backdrop extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.visibility,
      radioBtnsData: ["Mobile Money", "Paypal", "Credit Card"],
      checked: 0
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  navigate = () => {
    this.setState({ modalVisible: false });
    Actions.confirmation({ text: "hello world" });
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({ modalVisible: false });
        }}
      >
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.endBackdrop}
            onPress={() => {
              this.setModalVisible(false);
            }}
          />
          <View style={styles.paymentOptions}>
            {this.state.radioBtnsData.map((data, key) => {
              return (
                <View key={key} style={styles.payOptions}>
                  {this.state.checked == key ? (
                    <TouchableOpacity style={styles.btn}>
                      <Image
                        style={styles.img}
                        source={require("./../../../assets/rb_unselected.png")}
                      />
                      <Text>{data}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ checked: key });
                      }}
                      style={styles.btn}
                    >
                      <Image
                        style={styles.img}
                        source={require("./../../../assets/rb_selected.png")}
                      />
                      <Text>{data}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
            <Button
              title="CONFIRM"
              color="#00AF66"
              onPress={this.navigate}
              style={styles.confirmBtn}
            />
          </View>
          <TouchableOpacity
            style={styles.endBackdrop}
            onPress={() => {
              this.setModalVisible(false);
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
  paymentOptions: {
    width: "100%",
    flex: 4,
    backgroundColor: "#FFF",
    justifyContent: "space-around"
  },
  payOptions: {
    paddingLeft: 50
  },
  img: {
    height: 20,
    width: 20
  },
  btn: {
    flexDirection: "row"
  },
  confirmBtn: {
    width: "20%"
  }
});
