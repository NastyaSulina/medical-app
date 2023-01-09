import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Authentication from '../screens/Authentication/Authentication';
import Registration from '../screens/Registration/Registration';
import Main from '../screens/Main/Main';
import Profile from '../screens/Profile/Profile';
import ProfileEdition from '../screens/ProfileEdition/ProfileEdition';
import Archive from '../screens/Archive/Archive';
import Camera from '../screens/Archive/Camera';
import Adding from '../screens/Adding/Adding';
import InDevelopment from "../screens/InDevelopment/InDevelopment";

function Navigation() {
    const Stack = createNativeStackNavigator();
    const { isSignedIn } = useSelector((state) => state.commonReducer);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
                {isSignedIn ? (
                    <>
                        <Stack.Screen name="Main" component={Main} />
                        <Stack.Screen name="Profile" component={Profile} />
                        <Stack.Screen name="ProfileEdition" component={ProfileEdition} />
                        <Stack.Screen name="Archive" component={Archive} />
                        <Stack.Screen name="Camera" component={Camera} />
                        <Stack.Screen name="Adding" component={Adding} />
                        <Stack.Screen name="InDevelopment" component={InDevelopment} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Authentication" component={Authentication} />
                        <Stack.Screen name="Registration" component={Registration} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
