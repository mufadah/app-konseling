
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, Button } from 'react-native';
import React from 'react';

const Register = ({ navigation }) => (
  // <KeyboardAvoidingView
  //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  //   style={styles.container}>
    <ImageBackground source={require('../assets/bckgregris.png')} resizeMode='cover' style={styles.bgr}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back-arrow.png')} style={styles.back} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.Text}>Register</Text>
      </View>
      <View style={styles.srch}>
        <TextInput style={styles.input} placeholder="email" />
        <TextInput style={styles.pass} placeholder="password" />
      </View>
      <View style={{ bottom: 10, padding: 10, flex: 1, justifyContent: 'flex-end' }}>
        <Button title='create new account' />
      </View>
    </ImageBackground>
  // </KeyboardAvoidingView>
)

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  Text: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  bgr: {
    flex: 1,
    padding: 10,
  },
  backButtonContainer: {
    marginTop: 15
  },
  back: {
    width: 40,
    height: 40,
  },
  input: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
  },
  srch: {
    width: '80%',
    height: 90,
    alignSelf: 'center', 
    flexDirection:'column',
    marginTop:60
  },
  titleContainer: {
    padding: 10,
    marginTop:25
  }, 
  pass:{
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    marginTop:30,
  }
});
