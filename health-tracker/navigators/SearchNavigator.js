import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import SearchScreen from '../screens/SearchScreen'

const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Search'
                component={SearchScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function SearchNavigator() {
    return <MyStack />;
}
