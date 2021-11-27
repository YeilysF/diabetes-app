import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import HomeNavigator from "./HomeNavigator";

//screens
import AdminScreen from "../screens/Admin/AdminScreen";
import NotificationScreen from '../screens/NotificationScreen';
import MainTabNavigator from "../navigators/MainTabNavigator";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import DrawerComponent from '../components/DrawerComponent';
import LoginScreen from '../screens/User/LoginScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
    return (
        <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={(props) => <DrawerComponent {...props} />}
        >
        <Drawer.Screen 
            name="Home" 
            component={MainTabNavigator} 
            options={{
              headerShown: false,
              drawerIcon: () => (
              <Ionicons name="home" size={20} color='#6495ed'/>
              )
            }}
        />

        <Drawer.Screen 
            name="Admin" 
            component={AdminScreen} 
            options={{
              headerShown: true,
              drawerIcon: () => (
                <MaterialIcon
                name="admin-panel-settings"
                size={20}
                color='#6495ed'
              />
              )
            }}
        />

        <Drawer.Screen 
            name="Sign Out" 
            component={LoginScreen} 
            options={{
              headerShown: false,
              drawerIcon: () => (
              <Ionicons name="login" size={20} color='#6495ed'/>
              )
            }}
        />

        </Drawer.Navigator>
    );
  }

  export default DrawerNavigator;

  
  

