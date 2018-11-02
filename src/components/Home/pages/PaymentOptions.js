import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button
} from "react-native";

type Props = {};
export default class PaymentOptions extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      radioBtnsData: ["Mobile Money", "Paypal", "Credit Card"],
      checked: 0
    };
  }
  navigate = () => {
    this.props.endDisplay();
    Actions.confirmation({ text: "hello world" });
  };

  render() {
    return (
      <View style={styles.contentOptions}>
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
    );
  }
}

const styles = StyleSheet.create({
  contentOptions: {
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
