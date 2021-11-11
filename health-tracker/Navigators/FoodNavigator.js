import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import FoodScreen from '../screens/FoodScreen'

const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Food'
                component={FoodScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function FoodNavigator() {
    return <MyStack />;
}