import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

//screen
import MedicationScreen from '../screens/Home/MedicationScreen';
import MedicationForm from '../screens/Forms/MedicationForm';

const Stack = createStackNavigator();

const MedicationNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Medication'
                component={MedicationScreen}
                options={{
                    title: "Medications",
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: 'white',
                }}
            />
            <Stack.Screen 
                name='Medication Form'
                component={MedicationForm}
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: 'white',
                }}
            />
        </Stack.Navigator>
    )
  }

  export default MedicationNavigator;