import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, StatusBar,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import AntDesign from "react-native-vector-icons/AntDesign";

const GlucoseScreen = (props) => {
  return (
    <View style={styles.mainContainer}>
      
       <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}></View>

        <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">

            <Image source={(require('../../assets/images/10.png'))} style={{width: '70%', height: '30%', marginTop: '60%', marginBottom: -20}}/>
            <Text style={styles.subText}>No records</Text>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.medText}> Add Glucose Reading</Text>
              <AntDesign name="right" color='#4169e1' size={20}></AntDesign>
            </TouchableOpacity>

          </Animatable.View>

        </LinearGradient>
    </View>
  );
}

export default GlucoseScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
},
footer: {
  flex: 6,
  backgroundColor: '#fff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
   //paddingVertical: 270,
  paddingHorizontal: 70,
  alignItems: 'center',

  },
  subText:{
    fontSize: 25,
    color: 'gray',
    marginBottom: 20
  },
  medText:{
    fontWeight: 'bold',
    fontSize: 25,
    color: '#4169e1'
  }
});