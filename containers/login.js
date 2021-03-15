import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
//import GoogleSignIn from 'react-native-google-sign-in';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;

//type Props = {};
export default class Login extends Component {

    constructor(props){
        super(props)
    }

    googleSignIn = async() => {
        try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({ userInfo });
        } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            //alert('Login cancelled');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            //alert('Login in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            //alert('Login cancelled');
        } else {
            // some other error happened
        }
        }
        //const user = GoogleSignIn.signInPromise();
        this.props.navigation.navigate('News List')
    }

  facebookSignIn() {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
    this.props.navigation.navigate('ItemList')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to RSS FEED App
        </Text>
        <TouchableOpacity style={styles.btnContainerGoogle} onPress={this.googleSignIn}>
          <View>
            <Text style={styles.instructions}>Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainerFB} onPress={this.facebookSignIn}>
          <View>
            <Text style={styles.instructions}>Facebook</Text>
          </View>
        </TouchableOpacity>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  btnContainerGoogle:{
    width: '60%',
    height: 30,
    backgroundColor:"#db4437",
    borderColor:"#000",
    borderWidth:1,
    marginBottom: 15,


  },
  btnContainerFB:{
    width: '60%',
    height: 30,
    backgroundColor:"#3b5998",
    borderColor:"#000",
    borderWidth:1,
    marginBottom: 15,


  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    fontSize:20,
    
  },
});