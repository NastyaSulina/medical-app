import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authentication from '../screens/Authentication/Authentication';
import Registration from '../screens/Registration/Registration';
import Main from '../screens/Main/Main';

function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Authentication" component={Authentication} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
