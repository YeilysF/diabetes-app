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
                  headerShown: true,
                    headerTransparent: true,
                    headerTintColor: "white",
                    title: "",
                    headerLeft: () => (
                    <Icon3 name="menu" color='white' size={25} style={{marginLeft: 23}} onPress={() => props.navigation.openDrawer()}></Icon3>
                  ),
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