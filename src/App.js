import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Beranda from '../src/screen/Beranda'
import Register from '../src/screen/Login'
import Login from '../src/screen/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Utama from './screen/Utama'
import ConsultationSpace from './screen/consultationspace/ConsultationSpace'
import Psikotes from './screen/psikotesdandiagnosa/Psikotes'
import RunagBerbenah from './screen/ruangberbenah/RunagBerbenah'

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions={{ 
          headerShown: false,
          statusBarColor: '#ecbdb3',
          // statusBarTranslucent: true,
        }}>
        <Stack.Screen name="Beranda" component={Beranda} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Utama" component={Utama} />
        <Stack.Screen name="Consultation" component={ConsultationSpace} />
        <Stack.Screen name="Psikotes" component={Psikotes} />
        <Stack.Screen name="Ruang" component={RunagBerbenah} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})