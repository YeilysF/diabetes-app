import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screen
import ExerciseScreen from '../screens/Home/ExerciseScreen';
import ExerciseForm from '../screens/Forms/ExerciseForm';

const Stack = createStackNavigator();

const ExerciseNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Exercise'
                component={ExerciseScreen}
                options={{
                    title: "Exercise",
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: 'white',
                }}
            />
            <Stack.Screen 
                name='Exercise Form'
                component={ExerciseForm}
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: 'white',
                }}
            />
        </Stack.Navigator>
    )
  }

  export default ExerciseNavigator;