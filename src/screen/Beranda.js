import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, Image, StyleSheet,ImageBackground,StatusBar,TouchableOpacity} from 'react-native';
// import Header from './component/Header';

const Beranda = ({navigation}) => {
  return (
  <View style={styles.container}>
  {/* <StatusBar barStyle='light-content' backgroundColor='#b72ddf'/> */}
  {/* <Header title='Ruberi'/> */}
  
  <ImageBackground source={require('../assets/Search.png')} resizeMode="cover" style={styles.image}>
 
  </ImageBackground>
  <View style={styles.beri}>
  <TouchableOpacity style={styles.klik} onPress={() => navigation.navigate('Login')}>
    <View style={styles.lapisan}>
      <Text style={{color:'black',width:80,height:30,marginLeft:40,marginTop:10}}>Register</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.klik2} onPress={() => navigation.navigate('Register')}>
  <View>
      <Text style={{color:'white',width:80,height:30,marginLeft:40,marginTop:10}}>   Log in</Text>
    </View>
  </TouchableOpacity>
  </View>

    
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image:{
    flex:1,
    justifyContent:'center'
  },
  beri:{
    backgroundColor:'white',
    flexDirection:'row',
    // justifyContent:'center',
    marginTop:35,
    // alignItems:'center'
  },
  klik:{
    height:50,
    width:150,
    backgroundColor:'black',
    borderRadius:7,
    marginLeft:40,
    marginRight:20,
    
  },
  klik2:{
    backgroundColor:'black',
    height:50,
    width:150,
    borderRadius:7,
    marginBottom:30,
  },
  lapisan:{
    height:47,
    width:147,
    backgroundColor:'white',
    borderRadius:7,
    marginLeft:1.4,
    marginTop:1.2
  }

});

export default Beranda;