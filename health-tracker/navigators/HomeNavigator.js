import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

//screens
import NotificationScreen from "../screens/Home/NotificationScreen";
import InsulinScreen from "../screens/Home/InsulinScreen";
import GlucoseScreen from "../screens/Home/GlucoseScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import MedicationScreen from "../screens/Home/MedicationScreen";
import MainTabNavigator from './MainTabNavigator';
import BPScreen from '../screens/Home/BPScreen';
import NutritionScreen from '../screens/Home/NutritionScreen';
import ExerciseScreen from '../screens/Home/ExerciseScreen';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
        >
            <Stack.Screen 
                name='Home'
                component={MainTabNavigator}
                options={{
                  headerShown: false,
                }}
                
            />
            <Stack.Screen 
                name="Notifications" 
                component={NotificationScreen} 
                options={{
                  headerShown: true,
                  headerTransparent: true,
                }}
            />
             <Stack.Screen 
                name="Medications" 
                component={MedicationScreen} 
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTintColor: 'white',
                }}
            />
            <Stack.Screen 
                name="Insulin" 
                component={InsulinScreen} 
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTintColor: 'white',
                }}
            />
             <Stack.Screen 
                name="Glucose" 
                component={GlucoseScreen} 
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTintColor: 'white',
                }}
            />
             <Stack.Screen 
                name="Blood Pressure" 
                component={BPScreen} 
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTintColor: 'white',
                }}
            />
            <Stack.Screen 
                name="Nutrition" 
                component={NutritionScreen} 
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTintColor: 'white',
                }}
            />
            <Stack.Screen 
                name="Exercise" 
                component={ExerciseScreen} 
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTintColor: 'white',
                }}
            />
        </Stack.Navigator>
    )
  }

export default HomeNavigator;