import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authentication from '../screens/Authentication/Authentication';
import Registration from '../screens/Registration/Registration';
import Main from '../screens/Main/Main';
import Profile from '../screens/Profile/Profile';
import ProfileEdition from '../screens/ProfileEdition/ProfileEdition';
import Archive from "../screens/Archive/Archive";

function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Authentication" component={Authentication} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="ProfileEdition" component={ProfileEdition} />
                <Stack.Screen name="Archive" component={Archive} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
