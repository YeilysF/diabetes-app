import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import HomeNavigator from '../navigators/HomeNavigator';
import ProfileNavigator from '../navigators/ProfileNavigator';

import UserStackNavigator from "./UserStackNavigator";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


const MainTabNavigator = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#6495ed",
        //keyboardHidesTabBar: true,
       // showLabel: false,
         activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="home" color='#6495ed' size={30} />
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: 'white',  
          headerLeft: () => (
            <Icon3 name="menu" color='white' size={25} style={{marginLeft: 23}} onPress={() => props.navigation.openDrawer()}></Icon3>
          ), 
          headerRight: () => (
            <Icon2 name="edit" color='white' size={25} style={{marginRight: 23}} onPress={() => alert('Edit Profile')}></Icon2>
          ),
          tabBarIcon: () => (
            <Icon name="user" color='#6495ed' size={30} />
          ),
        }}
      />


    </Tab.Navigator>
  );
};

export default MainTabNavigator;
