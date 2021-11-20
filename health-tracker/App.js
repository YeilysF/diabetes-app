import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { LogBox } from "react-native";
//import _ from 'lodash';
//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import Toast from "react-native-toast-message";
// <Toast ref={(ref) => Toast.setRef(ref)} />
//import MainNavigator from './navigators/MainTabNavigator';
import StackNavigator from './navigators/UserStackNavigator';
//import DrawerNavigator from './navigators/DrawerNavigator';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
}
