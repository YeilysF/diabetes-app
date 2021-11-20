import React from 'react';
import { View, Text,TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'

const HomeScreen = (props) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome back, User!</Text>
        </View>
            <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">
            </Animatable.View>
        </LinearGradient>
      </View>
    );
};

export default HomeScreen;

const {height} = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      marginLeft: 20,
      marginTop: 50,
      alignItems: 'flex-start'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 270,
      paddingHorizontal: 30
  },
  title: {
    color: 'aliceblue',
    fontSize: 30,
    fontWeight: 'bold'
  },
});