import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

//screen
import ProfileScreen from '../screens/User/ProfileScreen'

const Stack = createStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Profile'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
  }

  export default ProfileNavigator;