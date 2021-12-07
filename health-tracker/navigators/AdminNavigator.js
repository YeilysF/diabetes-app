import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

//screen
import AdminScreen from '../screens/Admin/AdminScreen';
import ListUsers from '../screens/Admin/ListUsers';

const Stack = createStackNavigator();

const AdminNavigator = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Admin'
                component={AdminScreen}
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: "white",
                    headerLeft: () => (
                        <Icon3 name="menu" color='white' size={25} style={{marginLeft: 23}} onPress={() => props.navigation.openDrawer()}></Icon3>
                      ),
                      headerRight: () => (
                        <Icon3 name="plus" color='white' size={25} style={{marginRight: 23}} onPress={() => props.navigation.navigate("List Users")}></Icon3>
                      ),
                }}
            />
            <Stack.Screen 
                name='List Users'
                component={ListUsers}
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: "white",
                   
                }}
            />
        </Stack.Navigator>
    )
  }

  export default AdminNavigator;
