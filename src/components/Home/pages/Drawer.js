import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default class Drawer extends Component {
  componentDidMount() {
    
  }
TextInput
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image source={require("../../../assets/avatar.png")}/>
          </View>
          <View>
          <Text style={styles.profileNameStyle}>Lutaaya Brian Ivan</Text>
          </View>
        </View>
        <View style={styles.drawerInfo}>

          <TouchableOpacity style={styles.drawerTabs}>
            <View style={styles.infoIcon}>
              <Icon name="person-outline" color="#2F3C4C" size={25}  />
            </View>
            <View style={styles.infoName}>
              <Text>Profile</Text>
              <Icon name="chevron-right" color="#2F3C4C" size={25} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerTabs}>
            <View style={styles.infoIcon}>
              <Icon name="star-border" color="#2F3C4C" size={25} />
            </View>
            <View style={styles.infoName}>
              <Text>Rate</Text>
              <Icon name="chevron-right" color="#2F3C4C" size={25} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerTabs}>
            <View style={styles.infoIcon}>
              <Icon name="share" color="#2F3C4C" size={25} />
            </View>
            <View style={styles.infoName}>
              <Text>Share</Text>
              <Icon name="chevron-right" color="#2F3C4C" size={25} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.drawerTabs}>
            <View style={styles.infoIcon}>
              <Icon name="settings" color="#2F3C4C" size={25} />
            </View>
            <View style={styles.infoName}>
              <Text>Settings</Text>
              <Icon name="chevron-right" color="#2F3C4C" size={25} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.drawerTabs}>
            <View style={styles.infoIcon}>
              <Icon name="info" color="#2F3C4C" size={25} />
            </View>
            <View style={styles.infoName}>
              <Text> About </Text>
              <Icon name="chevron-right" color="#2F3C4C" size={25} />
            </View>
          </TouchableOpacity>
                    
          <View style={styles.drawerFooter}>
            <Text style={{color: '#FFF'}}>All Rights Reserved Briantical 2018</Text>
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
  headerContainer:{
    flex: 3,
    backgroundColor: "#00AF66",
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer:{
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#2F3C4C',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'

  },
  profileNameStyle:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25
  },
  drawerInfo:{
    flex: 7,    
  },
  drawerTabs:{
    flex: 2,
    flexDirection: 'row',      
  },
  drawerFooter:{
    flex: 1,
    backgroundColor: '#2F3C4C', 
    justifyContent: 'center'      ,
    alignItems: 'center'
  },
  infoIcon:{
    flex: 2,    
    justifyContent: 'center',
    alignItems: 'center'
  },  
  infoName:{
    flex: 6,
    justifyContent: 'space-between',
    paddingRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#2F3C4C',
    borderBottomWidth: StyleSheet.hairlineWidth,  
  }
});
