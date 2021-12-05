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
import MedicationNavigator from "./MedicationNavigator";
import MainTabNavigator from './MainTabNavigator';
import BPScreen from '../screens/Home/BPScreen';
import NutritionScreen from '../screens/Home/NutritionScreen';
import ExerciseScreen from '../screens/Home/ExerciseScreen';
import InsulinNavigator from './InsulinNavigator';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
        >
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
                
            />
            <Stack.Screen 
                name="Notifications" 
                component={NotificationScreen} 
                options={{
                  headerShown: false,
                }}
            />
             <Stack.Screen 
                name="Medications" 
                component={MedicationNavigator} 
                options={{
                  headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Insulin" 
                component={InsulinNavigator} 
                options={{
                  headerShown: false,
                }}
            />
             <Stack.Screen 
                name="Glucose" 
                component={GlucoseScreen} 
                options={{
                  headerShown: false,
                }}
            />
             <Stack.Screen 
                name="Blood Pressure" 
                component={BPScreen} 
                options={{
                  headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Nutrition" 
                component={NutritionScreen} 
                options={{
                  headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Exercise" 
                component={ExerciseScreen} 
                options={{
                  headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
  }

export default HomeNavigator;