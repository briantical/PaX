import React, { Component } from "react";
import { View, DrawerLayoutAndroid, StyleSheet } from "react-native";

import Checkins from "./pages/Checkins";
import UserProfile from './pages/UserProfile'
import UserShare from './pages/UserShare'
import Settings from './pages/Settings'
import About from './pages/About'

import Drawer from "./pages/Drawer";

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      activeView :2
    }
  }
  changeView = (index)=>{  
    console.log('Index: ' + index)  
    this.setState({activeView: index})    
  }

  show = (view) =>{
      if(view == 1)
        return <UserProfile/>
      else if(view == 2)
        return <Checkins/>
      else if(view == 3)
        return <UserShare/>
      else if(view == 4)
        return <Settings/>
      else if(view == 5)
        return <About/>
      else
        return <View><Text>WRONG TEXT</Text></View>
  }
  render() {
    return (
      <View style={styles.container}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => <Drawer display={this.changeView}/>}
        >
          {this.show(this.state.activeView)}
        </DrawerLayoutAndroid>
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
