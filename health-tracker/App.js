import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState} from 'react';
import { LogBox } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

// Context API
import Auth, {AuthContext}  from './context/store/Auth';

//Navigators
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigators/UserStackNavigator';
import DrawerNavigator from './navigators/DrawerNavigator';
import MainTabNavigator from './navigators/MainTabNavigator';
import LoginScreen from './screens/User/LoginScreen';
import HomeScreen from './screens/Home/HomeScreen';

//import { RootSiblingParent } from 'react-native-root-siblings';

LogBox.ignoreAllLogs(true);

const App = () => {

  return (
    //Use this to change between the Login Screens and the Home Screens
    //Only need to change userToken to "false"
    // <RootSiblingParent></RootSiblingParent>
    <Auth>
      <NavigationContainer>
          <StackNavigator/>
    </NavigationContainer>
  </Auth>
  );
}


export default App;