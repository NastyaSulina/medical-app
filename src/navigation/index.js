import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authentication from '../screens/Authentication/Authentication';
import Registration from '../screens/Registration/Registration';
import Main from '../screens/Main/Main';
import Profile from '../screens/Profile/Profile';

function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Authentication" component={Authentication} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
