import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import HomeScreen from "../screens/Home/HomeScreen";
import MedicationNavigator from "./MedicationNavigator";
import NutritionScreen from '../screens/Home/NutritionScreen';
import InsulinNavigator from './InsulinNavigator';
import GlucoseNavigator from './GlucoseNavigator';
import BPNavigator from './BPNavigator';
import ExerciseNavigator from './ExerciseNavigator';

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
                component={GlucoseNavigator} 
                options={{
                  headerShown: false,
                }}
            />
             <Stack.Screen 
                name="Blood Pressure" 
                component={BPNavigator} 
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
                component={ExerciseNavigator} 
                options={{
                  headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
  }

export default HomeNavigator;