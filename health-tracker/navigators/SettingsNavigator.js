import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

//screens
import AboutScreen from "../screens/Settings/AboutScreen"
import SettingsScreen from "../screens/Settings/SettingsScreen"
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
import GlucoseNavigator from './GlucoseNavigator';
import BPNavigator from './BPNavigator';
import ExerciseNavigator from './ExerciseNavigator';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName='Settings'
        >
            <Stack.Screen 
                name='Settings'
                component={SettingsScreen}
                options={{
                  headerShown: false,
                }}
            />
            <Stack.Screen 
                name='About'
                component={AboutScreen}
                options={{
                  headerShown: false,
                }}
            />
           
        </Stack.Navigator>
    )
  }

export default HomeNavigator;