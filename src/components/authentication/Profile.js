import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import { Header, Input, Button, Spinner } from "native-base";
import firebase from "react-native-firebase";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from "rn-fetch-blob";
import { Actions } from "react-native-router-flux";

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

const sessionId = new Date().getTime();
let imageID = `${sessionId}` + ".jpg";
let userkey = `${sessionId}`;

type Props = {};
export default class Profile extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Password: "",
      photoUrl: "",
      name: "",
      vehicle: "",
      userName: "",
      phoneNumber: "+256",
      ImageSource: null,
      imageURL: null,
      user: null,
      userID: userkey,
      profileComplete: false,
      errorMessage: "",
      showSpinner: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.setState({ Email: user.email });
        this.setState({ photoUrl: user.photoURL });
        this.setState({ name: user.displayName });
        this.setState({ uid: user.uid });
        this.setState({ phoneNumber: user.phoneNumber });
      }
    });
  }

  uploadImage(uri) {
    Blob.build(RNFetchBlob.wrap(uri), { type: "image/jpeg" })
      .then(blob =>
        firebase
          .storage()
          .ref("/profilePictures")
          .child(imageID)
          .put(uri, { contentType: "image/jpg" })
          .then(result => result.downloadURL)
          .then(uri => {
            this.setState({ imageURL: uri });
          })
          .catch(error => console.log(error))
      )
      .catch(error => {
        reject(error);
      });
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };
        this.uploadImage(response.path);
        this.setState({
          ImageSource: source
        });
      }
    });
  }

  onSubmit() {
    this.setState({ showSpinner: true });
    var db = firebase.firestore();
    db.collection("Users")
      .add({
        userID: this.state.userID,
        username: this.state.userName,
        userEmail: this.state.Email,
        vehicle: this.state.vehicle,
        phoneNumber: this.state.phoneNumber,
        imageURL: this.state.imageURL,
        profileComplete: true,
        password: "***********"
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });

    var user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: this.state.userName,
        photoURL: this.state.imageURL,
        phoneNumber: this.state.phoneNumber
      })
      .then(() => {
        console.log("Profile entries successfully made");
      })
      .catch(error => {
        console.log("Profile update failed with error:" + error);
      });
    Actions.home();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{
            backgroundColor: "#1B365D",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#fff" }}>Complete Profile</Text>
        </Header>

        <View style={{ height: 40 }}>
          <Input
            placeholder="username:"
            value={this.state.userName}
            style={styles.input}
            onChangeText={userName => this.setState({ userName })}
          />
        </View>
        <View style={{ height: 40 }}>
          <Input
            placeholder="Vehicle:"
            value={this.state.vehicle}
            style={styles.input}
            onChangeText={vehicle => this.setState({ vehicle })}
          />
        </View>
        <View style={{ height: 40 }}>
          <Input
            placeholder="phone number:"
            value={this.state.phoneNumber}
            style={styles.input}
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
          />
        </View>
        <TouchableOpacity
          onPress={this.selectPhotoTapped}
          style={{ borderRadius: 100, height: 100, width: 100 }}
        >
          <View style={styles.ImageContainer}>
            {this.state.imageURL ? (
              <Image
                style={styles.afterImageContainer}
                tintColor="#FFF"
                source={{ uri: this.state.imageURL }}
              />
            ) : (
              <Image
                style={styles.afterImageContainer}
                source={require("../../assets/avatar.png")}
              />
            )}
          </View>
        </TouchableOpacity>
        {this.state.showSpinner ? (
          <Spinner color="#00AF66" />
        ) : (
          <Button
            rounded
            style={{
              width: 100,
              justifyContent: "center",
              backgroundColor: "#00AF66",
              alignSelf: "center"
            }}
            onPress={this.onSubmit}
          >
            <Text style={{ color: "#fff" }}>Submit</Text>
          </Button>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    borderRadius: 20
  },
  ImageContainer: {
    borderRadius: 100,
    width: 100,
    height: 100,
    borderColor: "#00AF66",
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B365D"
  },
  afterImageContainer: {
    borderRadius: 100,
    width: 100,
    height: 100,
    borderColor: "#9B9B9B",
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  }
});
