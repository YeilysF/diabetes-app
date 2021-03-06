import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import HomeNavigator from "./HomeNavigator";

//screens
import AdminScreen from "../screens/Admin/AdminScreen";
import SettingsNavigator from "./SettingsNavigator";
//import AdminScreen from "../screens/Admin/AdminScreen";
import MainTabNavigator from "../navigators/MainTabNavigator";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import DrawerComponent from '../components/DrawerComponent';
import HomeNavigator from './HomeNavigator';
import  { AuthContext }  from '../context/store/Auth';
import AdminNavigator from './AdminNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {

  const context = React.useContext(AuthContext);

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

      {context.stateUser.user.isAdmin == true ? (
        <Drawer.Screen 
            name="Admin" 
            component={AdminNavigator} 
            options={{
              headerShown: false,
              drawerIcon: () => (
                <MaterialIcon
                name="admin-panel-settings"
                size={20}
                color='#6495ed'
              />
              )
            }}
        />
        
      ): null }
      <Drawer.Screen 
            name="Settings" 
            component={SettingsNavigator} 
            options={{
              headerShown: false,
              drawerIcon: () => (
                <MaterialIcon
                name="settings"
                size={20}
                color='#6495ed'
              />
              )
            }}
        />

        </Drawer.Navigator>
    );
  }

  export default DrawerNavigator;

  
  

