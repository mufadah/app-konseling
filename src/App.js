import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Beranda from '../src/screen/Beranda'
import Register from '../src/screen/Login'
import Login from '../src/screen/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Utama from './screen/Utama'

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions={{ 
          headerShown: false,
          statusBarColor: '#F9BEBE',
          // statusBarTranslucent: true,
        }}>
        <Stack.Screen name="Beranda" component={Beranda} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Utama" component={Utama} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})