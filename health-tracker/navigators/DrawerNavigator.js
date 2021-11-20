import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import HomeNavigator from "./HomeNavigator";
import HomeScreen from "../screens/HomeScreen";
import AdminScreen from "../screens/Admin/AdminScreen";

import MainTabNavigator from "../navigators/MainTabNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
      <NavigationContainer>
        <Drawer.Navigator 
        initialRouteName="Home">

        <Drawer.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="home" color={color} size={30} />
                ),
              }}
        />

        <Drawer.Screen 
            name="Admin" 
            component={AdminScreen} 
        />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }