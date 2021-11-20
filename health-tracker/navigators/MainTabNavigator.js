import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient'

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome";

//Screens
import HealthScreen from '../screens/HealthScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/User/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'

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

const HomeNavigator = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen 
              name='Home'
              component={HomeScreen}
              options={{
                  headerShown: false,
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

const SearchNavigator = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen 
              name='Search'
              component={SearchScreen}
              options={{
                  headerShown: false,
              }}
          />
      </Stack.Navigator>
  )
}

const Main = (props) => {
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
          tabBarIcon: ({ color }) => (
            <Icon name="home" color='#6495ed' size={30} />
            ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="search" color='#6495ed' size={30} />
          ),
        }}
      />

       <Tab.Screen
        name="Health"
        component={HealthNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon2 name="heartbeat" color='#6495ed' size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="user" color='#6495ed' size={30} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default Main;
