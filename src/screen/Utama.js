import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { template } from '@babel/core'

const Utama = ({navigation}) => {
  return (
    <View style={styles.container}>
    
      <Image source={{uri:'https://ik.imagekit.io/pashouses/pandu/pages/wp-content/uploads/2023/07/DSC01847-scaled.jpg'}} style={styles.image}/>
      <Image source={require('../assets/hai.png')} style={styles.image1}/>
        <View style={styles.welcome}>
          <Text style={styles.Text}>Welcome To </Text>
          <Text style={styles.Text1}>Ruang Berbenah Diri</Text>
        </View>
        <ScrollView>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Consultation')}>
        <View style={styles.options}>
            <Image source={{uri:'https://d3p0bla3numw14.cloudfront.net/news-content/img/2020/12/29103401/Furniture-Ruang-Tamu-3.jpg'}} style={styles.image2}/>
            <View style={styles.bagian_text}>
            <Text style={styles.Text2}>Consultation Space</Text>
            <Text style={styles.Text3}>Tempat konsultasi permasalahan </Text>
            <Text style={styles.Text3}>dalam kegiatan sehari-hari.</Text>
            
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Psikotes')}>
        <View style={styles.options}>
            <Image source={{uri:'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2018_12/2369266/180320-workplace-stress-al-1233.jpg'}} style={styles.image2}/>
            <View style={styles.bagian_text}>
            <Text style={styles.Text2}>Psikotes Dan Diagnosa</Text>
            <Text style={styles.Text3}>Tempat penegakan diagnosa</Text>
            <Text style={styles.Text3}>maupun psikotes dengan Ahli.</Text>
            
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Ruang')}>
        <View style={styles.options}>
            <Image source={{uri:'https://sman12berau.sch.id/wp-content/uploads/2023/01/BIMBINGAN-KONSELING.png'}} style={styles.image2}/>
            <View style={styles.bagian_text}>
            <Text style={styles.Text2}>Ruang Berbenah Diri</Text>
            <Text style={styles.Text3}>Tempat persiapan dan perbaikan diri </Text>
            <Text style={styles.Text3}>dengan kelas khusus yang diadakan</Text>
            <Text style={styles.Text3}>secara terjadwal.</Text>
            </View>
        </View>
        </TouchableOpacity>
        
        </ScrollView>
    </View>
  )
}

export default Utama

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  image:{
    width:'100%',
    height:450,
  },
  Text:{
    fontSize:25,
    fontFamily:'Comfortaa-Regular',
    color:'black',
    fontWeight:'bold'
  },
  Text1:{
    fontSize:15,
    fontFamily:'Comfortaa-Regular',
    color:'black',
    fontWeight:'bold'
  },
  welcome:{
    marginTop:-70,
    marginLeft:5
  },
  image1:{
    width:70,
    height:70,
    zIndex:99,
    position:'absolute',
    bottom:400,
    marginLeft:5
  },
  image2:{
    width:100,
    height:100,
    borderRadius:10
  },
  options:{
    marginTop:10,
    marginLeft:20,
    alignItems:'center',
    // justifyContent:'center',
    width:350,
    height:100,
    backgroundColor:'white',
    borderRadius:10,
    elevation:5,
    flexDirection:'row'
  },
  Text2:{
    fontFamily:'Comfortaa-Regular',
    color:'black',
    fontWeight:'bold'
  },
  bagian_text:{
    flexDirection:'column',
    marginLeft:10
  },
  Text3:{
    fontFamily:'Comfortaa-Regular',
    color:'black',
    fontSize:12,
    // fontWeight:'bold'
  },
})