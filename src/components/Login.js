import React, { Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../images/dolphin.png')}
          />
          <Text style={styles.dolphinText}>Dolphins are awesome!</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  dolphinText:{
    width: 140,
    fontSize: 20,
    color: 'darkblue',
    marginTop: 10,
    width: 160,
    textAlign: 'center'
  },
  formContainer:{

  }
})
