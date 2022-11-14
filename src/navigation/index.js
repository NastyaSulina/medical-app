import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authentication from '../screens/Authentication/Authentication.js';
import Registration from '../screens/Registration/Registration.js';

function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Authentication" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Authentication" component={Authentication} />
                <Stack.Screen name="Registration" component={Registration} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
