import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import HealthScreen from '../screens/HealthScreen'

const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Health'
                component={HealthScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function HealthNavigator() {
    return <MyStack />;
}