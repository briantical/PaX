import React, { Component } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { Button } from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";
import Home from "../Home/Home";

export default class Signup extends Component {
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
        } else {
          // User has been signed out, reset the state
          this.setState({
            user: null,
            message: "",
            codeInput: "",
            email: "@gmail.com",
            password: "",
            confirmResult: null
          });
        }
      });
    }
  }

  signIn = () => {
    const { email, password, confirmPassword } = this.state;
    this.setState({ message: "Creating account ..." });

    if (password === confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          Actions.profile();
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("Error Code:" + errorCode);
          console.log("Error Message: " + errorMessage);
        });
    } else {
      this.setState({ message: "Passwords dont match ..." });
    }
  };

  renderEmailInput() {
    const { email, password, confirmPassword } = this.state;

    return (
      <View style={{ padding: 25 }}>
        <View>
          <Text>Email:</Text>
          <TextInput
            autoFocus
            style={{ height: 40, marginTop: 15, marginBottom: 15 }}
            onChangeText={value => this.setState({ email: value })}
            placeholder={"Email ... "}
            value={email}
          />
          <Text>Enter password:</Text>
          <TextInput
            autoFocus
            secureTextEntry
            style={{ height: 40, marginTop: 15, marginBottom: 15 }}
            onChangeText={value => this.setState({ password: value })}
            placeholder={"Enter password ... "}
            value={password}
          />
          <Text>Confirm password:</Text>
          <TextInput
            autoFocus
            secureTextEntry
            style={{ height: 40, marginTop: 15, marginBottom: 15 }}
            onChangeText={value => this.setState({ confirmPassword: value })}
            placeholder={"Enter password ... "}
            value={confirmPassword}
          />
          <Button
            rounded
            style={{
              width: 100,
              justifyContent: "center",
              backgroundColor: "#1B365D",
              alignSelf: "center"
            }}
            onPress={this.signIn}
          >
            <Text style={{ color: "#fff" }}>SIGN UP</Text>
          </Button>
        </View>
      </View>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
      <Text style={{ padding: 5, backgroundColor: "#000", color: "#fff" }}>
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
