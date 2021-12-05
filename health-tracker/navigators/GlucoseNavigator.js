import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

//screen
import GlucoseScreen from '../screens/Home/GlucoseScreen';
import GlucoseForm from '../screens/Forms/GlucoseForm';

const Stack = createStackNavigator();

const GlucoseNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Glucose'
                component={GlucoseScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Glucose Form'
                component={GlucoseForm}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
  }

  export default GlucoseNavigator;