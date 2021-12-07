import React, {useContext, useCallback, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';
//import Ionicons from "react-native-vector-icons/Ionicons";
//import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { AuthContext }  from '../context/store/Auth';
import baseURL from "../assets/common/baseURL"
import { logoutUser } from "../context/actions/AuthActions"
import { useFocusEffect } from '@react-navigation/native';

function DrawerComponent(props) {

 const context = useContext(AuthContext);
 const [userInfo, setUserInfo] = useState([])

 useFocusEffect(
    useCallback(() => {
      if (context.stateUser.isAuthenticated === true) {
        axios
            .get(`${baseURL}Users/${context.stateUser.user.userId}`)
            .then((user) => setUserInfo(user.data))
      } else {
        console.log("User NOT authenticated")
      }
    }, []))

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfo}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image source={require('../assets/app_images/default-avatar.png')} size={50}/>
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{userInfo.fullname}</Title>
                                <Caption style={styles.caption}>{userInfo.email}</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItemList {...props} />
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={() => (
                        <Icon name="exit-to-app" size={20} color='#6495ed'/>
                    )}
                    label="Sign Out"
                    onPress={() => [AsyncStorage.removeItem("jwt"), logoutUser(context.dispatch), props.navigation.navigate("Splash")]}
                />
            </Drawer.Section>
        </View>
    );
}

export default DrawerComponent;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfo: {
        paddingLeft: 10,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
  });