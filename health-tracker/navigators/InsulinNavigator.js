import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

//screen
import InsulinScreen from '../screens/Home/InsulinScreen';
import InsulinForm from '../screens/Forms/InsulinForm';

const Stack = createStackNavigator();

const InsulinNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Insulin'
                component={InsulinScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Insulin Form'
                component={InsulinForm}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
  }

  export default InsulinNavigator;