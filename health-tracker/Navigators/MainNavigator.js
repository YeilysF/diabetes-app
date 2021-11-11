import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Ionicons";

// Stacks
import HomeNavigator from "./HomeNavigator";
import HealthNavigator from "./HealthNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

const Main = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#e91e63",
        //keyboardHidesTabBar: true,
       // showLabel: false,
        //activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />

       <Tab.Screen
        name="Health"
        component={HealthNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon2 name="heartbeat" color={color} size={30} />
          ),
        }}
      />

       <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon3 name="person-circle-outline" color={color} size={30} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default Main;