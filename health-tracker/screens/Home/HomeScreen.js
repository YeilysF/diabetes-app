import React, { useContext, useState, useEffect, useCallback} from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image, ImageBackground, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { FlatGrid } from 'react-native-super-grid';
import Emoji from 'react-native-emoji';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Searchbar } from 'react-native-paper';
import { AuthContext }  from '../../context/store/Auth';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import baseURL from "../../assets/common/baseURL"

//vector icons
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = (props) => {
    const { colors } = useTheme();

    const context = useContext(AuthContext); 
    const [userInfo, setUserInfo] = useState([])
    
    useFocusEffect(
      useCallback(() => {
        if (context.stateUser.isAuthenticated === true) {
          AsyncStorage.getItem("jwt")
              .then((res) => {
                  axios
                      .get(`${baseURL}Users/${context.stateUser.user.userId}`, {
                          headers: { Authorization: `Bearer ${res}` },
                      })
                      .then((user) => setUserInfo(user.data))
              })
              .catch((error) => console.log(error))
        } else {
          console.log("User NOT authenticated")
        }
      }, []))

    const searched = true; 
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => {
      const medications = 'medications'
      const glucose     = 'glucose'
      const insulin     = 'insulin'
      const bloodP      = 'blood pressure'
      const nutrition   = 'nutrition'
      const exercise    = 'exercise'
      const empty       = ''
      setSearchQuery(query);
      if(empty.startsWith(query.toLowerCase())){
        setItems([
          { name: 'MEDICATIONS', link: require('../../assets/home_images/2.png'), color1: '#87cefa', color2: '#6495ed', width: 140, height: 70, screen: "Medications"},
          { name: 'GLUCOSE', link: require('../../assets/home_images/1.png'), color1: '#f08080', color2: '#cd5c5c', width: 120, height: 70, screen: "Glucose"},
          { name: 'INSULIN', link: require('../../assets/home_images/3.png'), color1: '#20b2aa', color2: '#48d1cc', width: 140, height: 70, screen: "Insulin"},
          { name: 'BLOOD PRESSURE', link: require('../../assets/home_images/6.png'), color1: '#4682b4', color2: '#1e90ff', width: 140, height: 70, screen: "Blood Pressure"},
          { name: 'NUTRITION', link: require('../../assets/home_images/7.png'), color1: '#daa520', color2: '#ffd700', width: 150, height: 70, screen: "Nutrition"}, 
          { name: 'EXERCISE', link: require('../../assets/home_images/8.png'), color1: '#b0c4de', color2: '#4682b4', width: 150, height: 70, screen: "Exercise"},
        ])
      }
      else if(medications.startsWith(query.toLowerCase())){
        setItems([
          { name: 'MEDICATIONS', link: require('../../assets/home_images/2.png'), color1: '#87cefa', color2: '#6495ed', width: 140, height: 70, screen: "Medications"}])
      }else if (glucose.startsWith(query.toLowerCase())){
        setItems([
          { name: 'GLUCOSE', link: require('../../assets/home_images/1.png'), color1: '#f08080', color2: '#cd5c5c', width: 120, height: 70, screen: "Glucose"}])
      }else if (insulin.startsWith(query.toLowerCase())){
        setItems([
          { name: 'INSULIN', link: require('../../assets/home_images/3.png'), color1: '#20b2aa', color2: '#48d1cc', width: 140, height: 70, screen: "Insulin"}])
      }else if (bloodP.startsWith(query.toLowerCase())){
        setItems([
          { name: 'BLOOD PRESSURE', link: require('../../assets/home_images/6.png'), color1: '#4682b4', color2: '#1e90ff', width: 140, height: 70, screen: "Blood Pressure"}])
      }else if (nutrition.startsWith(query.toLowerCase())){
        setItems([
          { name: 'NUTRITION', link: require('../../assets/home_images/7.png'), color1: '#daa520', color2: '#ffd700', width: 150, height: 70, screen: "Nutrition"}])
      }else if (exercise.startsWith(query.toLowerCase())){
        setItems([
          { name: 'EXERCISE', link: require('../../assets/home_images/8.png'), color1: '#b0c4de', color2: '#4682b4', width: 150, height: 70, screen: "Exercise"}])
      }else{
        setItems([
          { name: 'MEDICATIONS', link: require('../../assets/home_images/2.png'), color1: '#87cefa', color2: '#6495ed', width: 140, height: 70, screen: "Medications"},
          { name: 'GLUCOSE', link: require('../../assets/home_images/1.png'), color1: '#f08080', color2: '#cd5c5c', width: 120, height: 70, screen: "Glucose"},
          { name: 'INSULIN', link: require('../../assets/home_images/3.png'), color1: '#20b2aa', color2: '#48d1cc', width: 140, height: 70, screen: "Insulin"},
          { name: 'BLOOD PRESSURE', link: require('../../assets/home_images/6.png'), color1: '#4682b4', color2: '#1e90ff', width: 140, height: 70, screen: "Blood Pressure"},
          { name: 'NUTRITION', link: require('../../assets/home_images/7.png'), color1: '#daa520', color2: '#ffd700', width: 150, height: 70, screen: "Nutrition"}, 
          { name: 'EXERCISE', link: require('../../assets/home_images/8.png'), color1: '#b0c4de', color2: '#4682b4', width: 150, height: 70, screen: "Exercise"},
        ])
      }
      
    }

    const [items, setItems] = React.useState([
      { name: 'MEDICATIONS', link: require('../../assets/home_images/2.png'), color1: '#87cefa', color2: '#6495ed', width: 140, height: 70, screen: "Medications"},
      { name: 'GLUCOSE', link: require('../../assets/home_images/1.png'), color1: '#f08080', color2: '#cd5c5c', width: 120, height: 70, screen: "Glucose"},
      { name: 'INSULIN', link: require('../../assets/home_images/3.png'), color1: '#20b2aa', color2: '#48d1cc', width: 140, height: 70, screen: "Insulin"},
      { name: 'BLOOD PRESSURE', link: require('../../assets/home_images/6.png'), color1: '#4682b4', color2: '#1e90ff', width: 140, height: 70, screen: "Blood Pressure"},
      { name: 'NUTRITION', link: require('../../assets/home_images/7.png'), color1: '#daa520', color2: '#ffd700', width: 150, height: 70, screen: "Nutrition"}, 
      { name: 'EXERCISE', link: require('../../assets/home_images/8.png'), color1: '#b0c4de', color2: '#4682b4', width: 150, height: 70, screen: "Exercise"},
    ])

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}>
          <View style={styles.subHeader}>
              <Text style={styles.title}>Hi {userInfo.fullname} 
              <Emoji name="wave" style={{fontSize: 30}} />
              </Text>
          </View>
          <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={styles.search}
          />
         </View>
        </View>

          <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">
              <FlatGrid
                itemDimension={130}
                data={items}
                spacing={10}
                style={styles.gridView}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    onPress={()=>props.navigation.navigate(item.screen)}
                    >
                      <LinearGradient colors={[item.color1, item.color2]} style={[styles.itemContainer]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >
                      <Text style={{marginBottom: 10}}>
                        <Image source={(item.link)} style={{width: item.width, height: item.height }}/>
                      </Text>
                      <Text style={styles.itemName}>{item.name}</Text>
                      </LinearGradient>
                    </TouchableOpacity>
              
                )}
              />
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
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
  },
  subHeader: {
    marginTop: 40,
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  footer: {
      flex: 2.5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
     // paddingVertical: 270,
      paddingHorizontal: 5
  },
  title: {
    color: 'aliceblue',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 5,
    marginTop: 50
  },
  subText: {
    color: 'aliceblue',
    fontSize: 20,
    marginTop: 10
  },
  gridView: {
    flex: 1,
    marginTop: 20
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    //padding: 5,
    height: height * 0.19,
    width: height * 0.21,
    //borderColor: '#FFD700',
    //borderWidth: 10,
  },
  itemName: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  menu: {
    marginRight: 20,
  },
  search: {
    justifyContent: 'center',
    width: height*0.42,
    borderRadius: 10
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 20
  }
});