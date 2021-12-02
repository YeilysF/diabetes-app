import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/User/LoginScreen';
//import ProfileScreen from '../screens/User/ProfileScreen';
import SplashScreen from "../screens/User/SplashScreen";
import SignUpScreen from "../screens/User/SignUpScreen";
import Questionnaire from "../screens/User/Questionnaire";

import MainTabNavigator from "../navigators/MainTabNavigator";
import HomeScreen from "../screens/HomeScreen";
import DrawerNavigator from "./DrawerNavigator";
import ForgotPassword from "../screens/User/ForgotPassword";

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
                name="Questionnaire"
                component={Questionnaire}
                options={{
                    headerShown: false,
                }}
            /> 
            <Stack.Screen 
                name="Forgot Password"
                component={ForgotPassword}
                options={{
                    headerShown: false,
                }}
            />                 
        </Stack.Navigator>
    )
}

