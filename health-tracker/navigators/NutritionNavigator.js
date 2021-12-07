import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

//screen
import NutritionScreen from '../screens/Home/NutritionScreen';
import NutritionForm from '../screens/Forms/NutritionForm';

const Stack = createStackNavigator();

const NutritionNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Nutrition'
                component={NutritionScreen}
                options={{
                    title: "Nutrition",
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: 'white',
                }}
            />
             <Stack.Screen 
                name='Nutrition Form'
                component={NutritionForm}
                options={{
                    title: "Nutrition Form",
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: 'white',
                }}
            />
        </Stack.Navigator>
    )
  }

  export default NutritionNavigator;