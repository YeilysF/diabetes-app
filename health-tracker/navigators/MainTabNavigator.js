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
import HealthScreen from '../screens/HealthScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/User/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'

import UserStackNavigator from "./UserStackNavigator";
import ReportScreen from "../screens/ReportScreen";
import NotificationScreen from "../screens/NotificationScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const HealthNavigator = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen 
              name='Health'
              component={HealthScreen}
              options={{
                  headerShown: false,
              }}
          />
      </Stack.Navigator>
  )
}

const HomeNavigator = (props) => {
  return (
      <Stack.Navigator>
          <Stack.Screen 
              name='Home'
              component={HomeScreen}
              options={{
                headerShown: true,
                headerTransparent: true,
                headerTintColor: 'white',
                headerLeft: () => (
                  <Icon3 name="menu" color='white' size={25} style={{marginLeft: 23}} onPress={() => props.navigation.openDrawer()}></Icon3>
                ),
                headerRight: () => (
                  <Ionicons name="notifications" color='white' size={25} style={{marginRight: 23}} onPress={() => props.navigation.navigate('Notifications')}></Ionicons>
                ),
              }}
              
          />
          <Stack.Screen 
              name="Notifications" 
              component={NotificationScreen} 
              options={{
                headerShown: true,
              }}
          />
      </Stack.Navigator>
  )
}

const ProfileNavigator = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen 
              name='Profile'
              component={ProfileScreen}
              options={{
                  headerShown: false,
              }}
          />
      </Stack.Navigator>
  )
}

const ReportNavigator = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen 
              name='Report'
              component={ReportScreen}
              options={{
                  headerShown: false,
              }}
          />
      </Stack.Navigator>
  )
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#6495ed",
        //keyboardHidesTabBar: true,
       // showLabel: false,
        //activeTintColor: "#e91e63",
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
        name="Health"
        component={HealthNavigator}
        options={{
          headerShown: true,
          tabBarIcon: () => (
            <Icon name="heartbeat" color='#6495ed' size={30} />
          ),
        }}
      />

       <Tab.Screen
        name="Report"
        component={ReportNavigator}
        options={{
          headerShown: true,
          tabBarIcon: () => (
            <Icon2 name="notes-medical" color='#6495ed' size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          headerShown: true,
          tabBarIcon: () => (
            <Icon name="user" color='#6495ed' size={30} />
          ),
        }}
      />


    </Tab.Navigator>
  );
};

export default MainTabNavigator;
