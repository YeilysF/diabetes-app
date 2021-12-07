import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

//screen
import BPScreen from '../screens/Home/BPScreen';
import BPForm from '../screens/Forms/BPForm';

const Stack = createStackNavigator();

const BPNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Blood Pressure'
                component={BPScreen}
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: 'white',
                }}
            />
            <Stack.Screen 
                name='BP Form'
                component={BPForm}
                options={{
                    title: "Blood Pressure Form",
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: 'white',
                }}
            />
        </Stack.Navigator>
    )
  }

  export default BPNavigator;