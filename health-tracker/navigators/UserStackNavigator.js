import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/User/LoginScreen';
import RegistrationScreen from '../screens/User/RegistrationScreen';
//import ProfileScreen from '../screens/User/ProfileScreen';
import SplashScreen from "../screens/User/SplashScreen";
import SignUpScreen from "../screens/User/SignUpScreen";

import MainTabNavigator from "../navigators/MainTabNavigator";
import HomeScreen from "../screens/HomeScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

export default function UserStackNavigator() {
    return (
        <Stack.Navigator 
            initialRouteName="SplashScreen"
        >
            <Stack.Screen 
                name="Splash"
                component={SplashScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Sign Up"
                component={SignUpScreen}
                options={{
                    headerShown: false,
                }}
            />
             <Stack.Screen 
                name="Registration"
                component={RegistrationScreen}
                options={{
                    headerShown: false
                }}
            />
             
        </Stack.Navigator>
    )
}

