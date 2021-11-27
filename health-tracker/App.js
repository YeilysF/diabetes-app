import { StatusBar } from 'expo-status-bar';
import React, { isValidElement, useState } from 'react';
import { LogBox } from "react-native";
//import _ from 'lodash';
//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import Toast from "react-native-toast-message";
// <Toast ref={(ref) => Toast.setRef(ref)} />
import MainNavigator from './navigators/MainTabNavigator';
import StackNavigator from './navigators/UserStackNavigator';
import DrawerNavigator from './navigators/DrawerNavigator';
import LoginScreen from './screens/User/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';

LogBox.ignoreAllLogs(true);

export default function App() {

  const [userToken, setUserToken] = React.useState(false);

  const Root = createStackNavigator();
  
  return (
    //Use this to change between the Login Screens and the Home Screens
    //Only need to change userToken to "false"
    <NavigationContainer>
      {userToken ? 
      (
        <DrawerNavigator/>
      ) :
      (
        <StackNavigator/>
      )
    }
    </NavigationContainer>
  );
}