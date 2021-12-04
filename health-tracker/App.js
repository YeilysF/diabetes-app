import { StatusBar } from 'expo-status-bar';
import React, { isValidElement, useState, useContext, useEffect } from 'react';
import { LogBox } from "react-native";

// Context API
import Auth from "./context/store/Auth";

//Navigators
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigators/UserStackNavigator';
import DrawerNavigator from './navigators/DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './navigators/MainTabNavigator';

import  AuthContext  from './context/store/AuthContext';
import AuthReducer from './context/reducers/AuthReducer';
//import { RootSiblingParent } from 'react-native-root-siblings';

LogBox.ignoreAllLogs(true);

const App = (props) => {

  const [userToken, setUserToken] = React.useState(false);


  return (
    //Use this to change between the Login Screens and the Home Screens
    //Only need to change userToken to "false"
    // <RootSiblingParent></RootSiblingParent>
    
    <Auth>
      <NavigationContainer >
     
      
        
          <DrawerNavigator/>
       
      
      </NavigationContainer>
    </Auth>
  );
}

export default App;