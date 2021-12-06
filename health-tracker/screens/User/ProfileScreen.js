import React, { useContext, useState, useCallback, useEffect} from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image, FlatList, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";
import Auth, { AuthContext }  from '../../context/store/Auth';
import baseURL from "../../assets/common/baseURL"
import { logoutUser } from "../../context/actions/AuthActions"

//icons
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileScreen = (props) => {

  const [userProfile, setUserProfile] = useState([])

  const { stateUser, dispatch } = useContext(AuthContext); 

     useFocusEffect(
       useCallback(() => {
       if (
           stateUser.isAuthenticated === false || 
           stateUser.isAuthenticated === null
       ) {
          // props.navigation.navigate("Login")
       }

       AsyncStorage.getItem("jwt")
           .then((res) => {
               axios
                   .get(`${baseURL}Users/${stateUser.user.userId}`, {
                       headers: { Authorization: `Bearer ${res}` },
                   })
                   .then((user) => setUserProfile(user.data))
           })
           .catch((error) => console.log(error))

       }, [stateUser.isAuthenticated]))

      // console.log("user" + userProfile)


    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <LinearGradient colors={['#87cefa', '#4169e1']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.header}>
              <Image source={require("../../assets/app_images/defaultProfilePic.jpg")} style={styles.profileImage} resizeMode="center"></Image>
              <Text style={[styles.title, { fontWeight: "bold", fontSize: 24, marginTop: 5 }]}> Name: {userProfile.fullname}</Text>
              <Text style={[styles.subText]}>Email: {userProfile.email}</Text>
        </View>

          <Animatable.View style={[styles.footer, {backgroundColor: "white"}]} animation="fadeInUpBig">
              {/* diabetis Type
              Weightz
              */}
          </Animatable.View>
        </LinearGradient>
      </View>
    );
};

export default ProfileScreen;

const {height} = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
  },
  subHeader: {
    marginTop: 40,
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  footer: {
      flex: 2.1,
      marginTop: 15,
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
    marginTop: -20
  },
  button: {
    alignItems: 'center',
    marginTop: -120
  },
  editprofile: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: -50
  
  },
  profileImage: {
        width: 110,
        height: 110,
        borderRadius: 60,
        marginTop: '23%'
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    color: 'aliceblue',
    fontSize: 17,
    marginTop: 5,
  },
  gridView: {
    flex: 1,
    marginTop: 20
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    //padding: 5,
    height: height * 0.185,
    //borderColor: '#3498db',
    //borderWidth: 2,
  },
  nameContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 20
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
  
});

