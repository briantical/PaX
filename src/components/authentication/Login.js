import React, { Component } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { Button } from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";
import Home from "../Home/Home";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: "",
      email: "@gmail.com",
      password: "",
      confirmPassword: "",
      confirmResult: null
    };
  }

  componentDidMount() {
    if (this.state.user !== null) {
      this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ user: user.toJSON() });
        }
      });
    }
  }

  signIn = () => {
    const { email, password } = this.state;
    this.setState({ message: "Siging in ..." });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Sign in successful");
        Actions.home();
      })
      .catch(error => console.log("error:" + error.message));
  };

  renderEmailInput() {
    const { email, password } = this.state;

    return (
      <View style={{ padding: 25, justifyContent: "center", flex: 1 }}>
        <View>
          <View />
          <Text>Email:</Text>
          <TextInput
            autoFocus
            style={{
              color: "#2F3C4C",
              height: 40,
              marginTop: 15,
              marginBottom: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#2F3C4C"
            }}
            onChangeText={value => this.setState({ email: value })}
            placeholder={"Email ... "}
            value={email}
          />
          <Text>Enter password:</Text>
          <TextInput
            autoFocus
            secureTextEntry
            style={{
              color: "#2F3C4C",
              height: 40,
              marginTop: 15,
              marginBottom: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#2F3C4C"
            }}
            onChangeText={value => this.setState({ password: value })}
            placeholder={"Enter password ... "}
            value={password}
          />
          <Button
            rounded
            style={{
              width: 100,
              justifyContent: "center",
              backgroundColor: "#00AF66",
              alignSelf: "center"
            }}
            onPress={this.signIn}
          >
            <Text style={{ color: "#fff" }}>SIGN IN</Text>
          </Button>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>No Account yet?</Text>
          <Button
            block
            style={{ width: 100 }}
            transparent
            onPress={() => {
              Actions.signup();
            }}
          >
            <Text>Signup</Text>
          </Button>
        </View>
      </View>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
      <Text
        style={{
          padding: 5,
          backgroundColor: "#000",
          color: "#fff",
          //position: absolute,
          bottom: 0
        }}
      >
        {message}
      </Text>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {!user && !confirmResult && this.renderEmailInput()}

        {this.renderMessage()}

        {user && <Home />}
      </View>
    );
  }
}
