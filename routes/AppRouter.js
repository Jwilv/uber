import React from 'react'


import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler'
import HomeScreen from '../screens/HomeScreen';

const AppRouter = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <Stack.Navigator >

                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />

                </Stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    )
}

export default AppRouter