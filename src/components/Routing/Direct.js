import React, { Component } from "react";
import { StyleSheet, View} from "react-native";
import firebase from "react-native-firebase";

import Home from '../Home/Home'
import Login from '../authentication/Login'

export default class Direct extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,     
    };
  }

  componentDidMount() { 
     this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (user) {          
          this.setState({ user: user.toJSON() });          
        }
      });   
  }

  render() {
    return (
      <View style={styles.container}>
      
       {this.unsubscribe  ? <Home/> : <Login/>}  
    
       
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
