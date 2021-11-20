import React from 'react';
import { View, Text,TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'

const SplashScreen = (props) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">
                <Text style={[styles.title, {color: colors.text}]}>Health Tracker</Text>
                <Text style={styles.text}>For Diabetic Patients</Text>

                <View style={styles.button}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
                    <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.login}>
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons name="navigate-next" color="#fff" size={20}/>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </LinearGradient>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.30

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 70,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop: 5,
      fontSize: 20,
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 60
  },
  login: {
      width: 200,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
  
  },
});