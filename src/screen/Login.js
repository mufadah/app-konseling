
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Platform, Button, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';

const Login = ({ navigation }) => {

  const [data, setData] = useState ('')
  const [username, setUsername] = useState ('')
  const [Password, setPassword] = useState ('')
  let dbUser = {
    username: 'bangsat@gmail.com',
    password: '1234',
  };

  const handlerLogin = () => {

    setTimeout(() => {
      if (username == dbUser.username && Password == dbUser.password) {
        Alert.alert('sedang diproses', 'Loading...');
      

        navigation.navigate('Utama')
      } else {
        Alert.alert('Silahkan coba lagi');
      }
    }, 2000);
  };

  return(
  // <KeyboardAvoidingView
  //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  //   style={styles.container}>
    <ImageBackground source={require('../assets/Bckglogin.png')} resizeMode='cover' style={styles.bgr}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back-arrow.png')} style={styles.back} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.Text}></Text>
      </View>
      <View style={styles.srch}>
        <TextInput style={styles.input} placeholder="email" value={username} onChangeText={text => setUsername(text)}
        />
        <TextInput style={styles.pass} placeholder="password" secureTextEntry={true}  value={Password}
            onChangeText={text => setPassword(text)}
/>
      </View>
      <View style={{ bottom: 10, padding: 10, flex: 1, justifyContent: 'flex-end' }}>
        <Button title='login' onPress={handlerLogin}/>
      </View>
    </ImageBackground>
  // </KeyboardAvoidingView>
)
}

export default Login;

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
    justifyContent:'center',
    // position:'absolute',
    zIndex:99
  },
  backButtonContainer: {
    marginTop: 15
  },
  back: {
    width: 40,
    height: 40,
    // backgroundColor:'white'
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
    marginTop:120
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
